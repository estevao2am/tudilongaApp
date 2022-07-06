import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class salas1655994083236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"salas",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"numero",
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
        await queryRunner.dropTable("salas")
    }

}
