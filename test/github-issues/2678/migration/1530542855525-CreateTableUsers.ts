import { MigrationInterface } from "../../../../src/migration/MigrationInterface";
import { QueryRunner } from "../../../../src/query-runner/QueryRunner";

export class InitUsers1530542855526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "public"."users" (
                "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "username" character varying NOT NULL,
                "password" character varying NOT NULL,
                "role" character varying DEFAULT 'user' NOT NULL,
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            ) WITH (oids = false)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "users"
        `);
    }

}
