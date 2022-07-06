import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLibrary1653224471017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "library",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },

          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },

          {
            name: "url",
            type: "varchar",
            isUnique: true,
          },

          {
            name: "category_id",
            type: "uuid",
          },
{
  name:"user_id",
  type:"uuid"
},
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_library_category",
            columnNames: ["category_id"],
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_user_library",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
        ],

        
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("library");
  }
}
