import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn
} from 'typeorm'

import { Technical, Client } from './';

@Entity() // se marca la clase como una entidad de base de datos
export class Service extends BaseEntity{ // se exporta la clase "Servicio" que hereda de la clase "BaseEntity"
    @PrimaryGeneratedColumn() // se marca la propiedad "id" como la columna principal y se genera su valor automáticamente
    id: number; // se declara una propiedad "id" de tipo número

    @Column({unique: true}) // se marca la propiedad "token" como una columna de la tabla de base de datos con una restricción de unicidad
    token: string // se declara una propiedad "token" de tipo cadena

    @ManyToOne(() => Client, (client) => client.id) // se establece una relación muchos-a-uno con la entidad "Client", donde un servicio puede tener un solo client y un cliente puede tener muchos servicios
    client: Client // se declara una propiedad "client" de tipo "Client"

    @Column() // se marca la propiedad "descripcion" como una columna de la tabla de base de datos
    description: string // se declara una propiedad "descripcion" de tipo cadena

    @ManyToOne(() => Technical, (technical) => technical.id) // se establece una relación muchos-a-uno con la entidad "technical", donde un servicio puede tener un solo técnico y un técnico puede tener muchos servicios
    @JoinColumn() // se establece una columna de unión para la relación
    technical: Technical // se declara una propiedad "technical" de tipo "Technical"

    @Column() // se marca la propiedad "estado" como una columna de la tabla de base de datos
    status: string // se declara una propiedad "estado" de tipo cadena

    @CreateDateColumn() // se marca la propiedad "createat" como una columna de tipo fecha y se genera su valor automáticamente con la fecha actual
    createat: Date; // se declara una propiedad "createat" de tipo fecha
}



