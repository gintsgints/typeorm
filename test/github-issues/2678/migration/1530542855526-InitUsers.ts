import { MigrationInterface } from "../../../../src/migration/MigrationInterface";
import { QueryRunner } from "../../../../src/query-runner/QueryRunner";

export class InitUsers1530542855526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            INSERT INTO "users"("firstName", "lastName", "username", "password", "role")
            VALUES ('Test', 'User', 'username', '$2b$10$IqwMpSua6GLwH8KXWf71UeUR7GlfDyMp0gJxljKOYmW4jGksmwDVG', 'admin')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
