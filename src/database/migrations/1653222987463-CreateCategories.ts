import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1653222987463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"categories",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },

                    {
                        name:"name",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"description",
                        type:"varchar",
                    },
                    {
                        name:"user_id",
                        type:"uuid"
                      },

                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },

                    {
                        name:"update_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],   foreignKeys: [
                   
                    {
                      name: "fk_user_category",
                      columnNames: ["user_id"],
                      referencedTableName: "users",
                      referencedColumnNames: ["id"],
                    },
                  ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
    }

}
