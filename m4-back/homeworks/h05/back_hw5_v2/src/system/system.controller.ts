import { Controller, Get, Delete } from '@nestjs/common';
import { SystemService } from './system.service';
import { Request } from 'express';
import { Req } from '@nestjs/common';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get()
  listAllEndpointsSorted() {
    return this.systemService.listAllEndpointsSorted();
  }

  @Get('info')
  getSystemInfo() {
    return this.systemService.getSystemInfo();
  }

  @Get('time')
  async getServerAndDatabaseTime() {
    return await this.systemService.getServerAndDatabaseTime();
  }

  @Delete('resetDatabase')
  resetDatabase() {
    return this.systemService.resetDatabase();
  }

  @Get('infoDatabase')
  getDatabaseInfo() {
    return this.systemService.getDatabaseInfo();
  }

  @Get('entities')
  getEntitiesInfo() {
    return this.systemService.getEntitiesInfo();
  }

  @Get('package.json')
  getPackageInfo() {
    return this.systemService.getPackageInfo();
  }

  @Get('domain')
  getServerDomain(@Req() request: Request) {
    console.log('request: ', request);
    const domain = `${request.protocol}://${request.get('host')}`;

    const info = {
      domain,
      protocol: request.protocol,
      host: request.get('host'),
      subdomain: request.subdomains[0],
      originalUrl: request.originalUrl,
      baseUrl: request.baseUrl,
      params: request.params,
      query: request.query,
      path: request.path,
      method: request.method,
      headers: request.headers,
      body: request.body,
      route: request.route,
    };
    return info;
  }

  @Get('cookies')
  getCookies(@Req() request: Request) {
    const cookies = this.parseCookies(request.headers.cookie || '');
    return { cookies };
  }

  private parseCookies(cookieHeader: string) {
    const cookies: { [key: string]: string } = {};
    cookieHeader.split(';').forEach((cookie) => {
      const [name, ...rest] = cookie.split('=');
      const value = rest.join('=').trim();
      if (name && value) {
        cookies[name.trim()] = decodeURIComponent(value);
      }
    });
    return cookies;
  }

  @Get('endpoints')
  getAllEndpoints() {
    return this.systemService.listAllEndpoints();
  }
}
