import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1730850751403 implements MigrationInterface {
    name = 'Initial1730850751403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category_entity\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_entity\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(50) NOT NULL, \`description\` text NOT NULL, \`price\` decimal(10,2) NOT NULL, \`stock\` int NOT NULL, \`imgUrl\` varchar(255) NOT NULL DEFAULT 'https://bit.ly/fgpImg1', \`categoryId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_detail_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`totalPrice\` decimal(10,2) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` varchar(36) NULL, \`orderDetailsId\` int NULL, UNIQUE INDEX \`REL_31c634dc296fbdd97533ca8ec4\` (\`orderDetailsId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(50) NOT NULL, \`email\` varchar(50) NOT NULL, \`password\` varchar(20) NOT NULL, \`phone\` int NULL, \`country\` varchar(50) NULL, \`address\` text NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_detail_entity_products_product_entity\` (\`orderDetailEntityId\` int NOT NULL, \`productEntityId\` varchar(36) NOT NULL, INDEX \`IDX_21a7be39dbb7547599f1e6c961\` (\`orderDetailEntityId\`), INDEX \`IDX_dc3e5bae00647ed4fa614bc1c7\` (\`productEntityId\`), PRIMARY KEY (\`orderDetailEntityId\`, \`productEntityId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product_entity\` ADD CONSTRAINT \`FK_641188cadea80dfe98d4c769ebf\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_entity\` ADD CONSTRAINT \`FK_c8ab590f1e10afcf1637e71a71e\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_entity\` ADD CONSTRAINT \`FK_31c634dc296fbdd97533ca8ec46\` FOREIGN KEY (\`orderDetailsId\`) REFERENCES \`order_detail_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_detail_entity_products_product_entity\` ADD CONSTRAINT \`FK_21a7be39dbb7547599f1e6c961b\` FOREIGN KEY (\`orderDetailEntityId\`) REFERENCES \`order_detail_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order_detail_entity_products_product_entity\` ADD CONSTRAINT \`FK_dc3e5bae00647ed4fa614bc1c71\` FOREIGN KEY (\`productEntityId\`) REFERENCES \`product_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_detail_entity_products_product_entity\` DROP FOREIGN KEY \`FK_dc3e5bae00647ed4fa614bc1c71\``);
        await queryRunner.query(`ALTER TABLE \`order_detail_entity_products_product_entity\` DROP FOREIGN KEY \`FK_21a7be39dbb7547599f1e6c961b\``);
        await queryRunner.query(`ALTER TABLE \`order_entity\` DROP FOREIGN KEY \`FK_31c634dc296fbdd97533ca8ec46\``);
        await queryRunner.query(`ALTER TABLE \`order_entity\` DROP FOREIGN KEY \`FK_c8ab590f1e10afcf1637e71a71e\``);
        await queryRunner.query(`ALTER TABLE \`product_entity\` DROP FOREIGN KEY \`FK_641188cadea80dfe98d4c769ebf\``);
        await queryRunner.query(`DROP INDEX \`IDX_dc3e5bae00647ed4fa614bc1c7\` ON \`order_detail_entity_products_product_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_21a7be39dbb7547599f1e6c961\` ON \`order_detail_entity_products_product_entity\``);
        await queryRunner.query(`DROP TABLE \`order_detail_entity_products_product_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`REL_31c634dc296fbdd97533ca8ec4\` ON \`order_entity\``);
        await queryRunner.query(`DROP TABLE \`order_entity\``);
        await queryRunner.query(`DROP TABLE \`order_detail_entity\``);
        await queryRunner.query(`DROP TABLE \`product_entity\``);
        await queryRunner.query(`DROP TABLE \`category_entity\``);
    }

}
