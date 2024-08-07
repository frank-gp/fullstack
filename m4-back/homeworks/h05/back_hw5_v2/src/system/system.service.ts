import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class SystemService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {}

  getSystemInfo() {
    return {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      environmentVariables: { ...process.env, DB_PASSWORD: '********' },
      cpuInfo: os.cpus(),
      networkInterfaces: os.networkInterfaces(),
      osType: os.type(),
      osRelease: os.release(),
      osTotalMemory: os.totalmem(),
      osFreeMemory: os.freemem(),
    };
  }

  async getServerAndDatabaseTime() {
    // Hora del backend
    const serverTime = new Date();

    // Consulta para obtener la hora de la base de datos
    const result = await this.dataSource.query('SELECT NOW() AS dbTime');
    const databaseTime = result[0]?.dbTime;

    return {
      serverTime,
      databaseTime,
    };
  }

  async resetDatabase() {
    // Eliminar el esquema
    await this.dataSource.dropDatabase();
    console.log('Database schema dropped successfully');

    // Sincronizar el esquema (o ejecutar migraciones)
    await this.dataSource.synchronize(); // Usar `runMigrations()` si tienes migraciones
    console.log('Database schema synchronized successfully');
  }

  getDatabaseInfo() {
    const dbConfig = this.dataSource.options;
    const withoutPassword = {
      ...dbConfig,
      password: '********',
    };
    console.log('dbConfig', withoutPassword);
    return withoutPassword;
  }

  getEntitiesInfo() {
    return this.dataSource.entityMetadatas.map((entity) => ({
      entityName: entity.name,
      tableName: entity.tableName,
      columns: entity.columns.map((column) => ({
        columnName: column.propertyName,
        type: column.type,
        isPrimary: column.isPrimary,
        isNullable: column.isNullable,
        // isUnique: column.isUnique,
      })),
      relations: entity.relations.map((relation) => ({
        relationProperty: relation.propertyName,
        type: relation.relationType,
        targetEntity: relation.inverseEntityMetadata.name,
      })),
    }));
  }

  getPackageInfo() {
    const packagePath = path.resolve(__dirname, '../../package.json');
    const packageJson = fs.readFileSync(packagePath, 'utf8');
    return JSON.parse(packageJson);
  }

  listAllEndpoints() {
    const server = this.httpAdapterHost.httpAdapter.getInstance();
    const router = server._router;
    const endpoints = [];

    let id = 1;

    router.stack.forEach((layer) => {
      if (layer.route) {
        const path = layer.route.path;
        const methods = Object.keys(layer.route.methods)
          .join(', ')
          .toUpperCase();
        endpoints.push({ id: id++, path, methods });
      }
    });

    return endpoints;
  }

  listAllEndpointsSorted() {
    const server = this.httpAdapterHost.httpAdapter.getInstance();
    const router = server._router;
    const endpoints = [];

    router.stack.forEach((layer) => {
      if (layer.route) {
        const path = layer.route.path;
        const methods = Object.keys(layer.route.methods)
          .map((method) => method.toUpperCase())
          .join(', ');
        endpoints.push({ path, methods });
      }
    });

    // Ordenar los endpoints de acuerdo con el orden de métodos: GET, POST, PATCH, DELETE
    const methodOrder = ['GET', 'POST', 'PATCH', 'DELETE'];
    endpoints.sort((a, b) => {
      const methodA = methodOrder.indexOf(a.methods.split(', ')[0]) ?? 4;
      const methodB = methodOrder.indexOf(b.methods.split(', ')[0]) ?? 4;
      return methodA - methodB;
    });

    let id = 1;
    const sortedEndpoints = endpoints.map((endpoint) => {
      return {
        id: id++,
        path: endpoint.path,
        methods: endpoint.methods,
      };
    });

    return sortedEndpoints;
  }
}
