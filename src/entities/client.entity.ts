import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    BaseEntity
} from 'typeorm'

@Entity() // se marca la clase como una entidad de base de datos
export class Client extends BaseEntity{ // se exporta la clase "Cliente" que hereda de la clase "BaseEntity"
    @PrimaryGeneratedColumn() // se marca la propiedad "id" como la columna principal y se genera su valor automáticamente
    id: number; // se declara una propiedad "id" de tipo número

    @Column({type: 'varchar'}) // se marca la propiedad "name" como una columna de la tabla de base de datos
    name: string // se declara una propiedad "name" de tipo cadena

    @Column({type: 'varchar'}) // se marca la propiedad "adress" como una columna de la tabla de base de datos
    adress: string; // se declara una propiedad "adress" de tipo cadena

    @Column({type: 'varchar', unique: true}) // se marca la propiedad "mail" como una columna de la tabla de base de datos con una restricción de unicidad
    mail: string; // se declara una propiedad "mail" de tipo cadena

    @Column({type: 'varchar', unique: true}) // se marca la propiedad "phone" como una columna de la tabla de base de datos con una restricción de unicidad
    phone: number;  // se declara una propiedad "phone" de tipo número

    @CreateDateColumn({type: 'time without time zone'}) // se marca la propiedad "createat" como una columna de tipo fecha y se genera su valor automáticamente con la fecha actual
    createat: Date; // se declara una propiedad "createat" de tipo fecha
}