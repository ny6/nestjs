import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Coffee } from "./coffee.entity";


@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(_ => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
