import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class timestre1655994484810 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"timestres",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"trimestre",
                        type:"varchar",
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
        await queryRunner.dropTable("timestres")
    }

}
