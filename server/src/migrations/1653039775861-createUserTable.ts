import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserTable1653039775861 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" RENAME COLUMN "title" TO "name"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
