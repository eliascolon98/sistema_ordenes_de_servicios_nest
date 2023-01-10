import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    BaseEntity
} from 'typeorm'

@Entity()
export class Technical extends BaseEntity{ // se exporta la clase "Tecnico" que hereda de la clase "BaseEntity"
    @PrimaryGeneratedColumn() // se marca la propiedad "id" como la columna principal y se genera su valor automáticamente
    id: number; // se declara una propiedad "id" de tipo número

    @Column({type: 'varchar'}) // se marca la propiedad "nombre" como una columna de la tabla de base de datos
    name: string // se declara una propiedad "nombre" de tipo cadena

    @Column({default: true}) // se marca la propiedad "disponibilidad" como una columna de la tabla de base de datos con un valor por defecto
    status: boolean; // se declara una propiedad "disponibilidad" de tipo booleano

    @CreateDateColumn({type : 'time without time zone'}) // se marca la propiedad "createat" como una columna de tipo fecha y se genera su valor automáticamente con la fecha actual
    createat: Date; // se declara una propiedad "createat" de tipo fecha
}