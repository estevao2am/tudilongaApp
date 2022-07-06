import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class disciplina1655986711436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"disciplinas",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isUnique:true,
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("disciplinas")
    }

}
