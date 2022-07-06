import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createScholls1655980172660 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"scholl",
                columns:[
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
                        name:"email",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"phone",
                        type:"int",
                        isUnique:true
                    },
                    {
                        name:"logo",
                        type:"varchar"
                    },
                    {
                        name:"localizacao",
                        type:"varchar"
                    },
                    {
                        name:"provincia",
                        type:"varchar"
                },
                {
                    name:"bairro",
                    type:"varchar"
                },
                 {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()",
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
        await queryRunner.dropTable("scholl");
    }

}
