import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class nivelAcademico1655985583899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"nivel_academico",
                columns:[
                    {
                        name:"uuid",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
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
        await queryRunner.dropTable("nivel_academico")
    }

}
