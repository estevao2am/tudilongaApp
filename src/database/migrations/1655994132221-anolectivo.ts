import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class anolectivo1655994132221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"ano_lectivo",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"ano",
                        type:"int",
                        isUnique:true
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
        await queryRunner.dropTable("ano_lectivo")
    }

}
