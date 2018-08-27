import { MigrationInterface } from "../../../../src/migration/MigrationInterface";
import { QueryRunner } from "../../../../src/query-runner/QueryRunner";

export class IncrementFunctionR implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
          -- Function increments the input value by 1
          CREATE OR REPLACE FUNCTION increment(i INT) RETURNS INT AS $$
            BEGIN
              RETURN i + 1;
            END;
            $$ LANGUAGE plpgsql;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
