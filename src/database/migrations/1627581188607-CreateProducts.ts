import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1627581188607 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "posts",
        columns: [
          { name: "id", isPrimary: true, type: "uuid" },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "content",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("posts");
  }
}
