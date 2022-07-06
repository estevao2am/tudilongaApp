import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class cargaHoraria1656138371412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"carga_horaria",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"inicio",
                        type:"int"
                    },
                    {
                        name:"termino",
                        type:"int"
                    },
                    {
                        name:"tempo",
                        type:"int"
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
    
        await queryRunner.dropTable("carga_horaria")
    }

}
