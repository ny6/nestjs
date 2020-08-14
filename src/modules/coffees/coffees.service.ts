import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [{
    id: 1,
    name: 'Shipwreck Roast',
    brand: 'Buddy Brew',
    flavors: ['chocolate', 'vanilla'],
  }];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: number): Coffee {
    const coffee = this.coffees.find(item => item.id === id);
    if (!coffee) throw new NotFoundException(`Coffee #${id} not found!`);

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto): void {
    this.coffees.push({ ...createCoffeeDto, id: 4 });
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto): void {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: number): void {
    const coffeeIndex = this.coffees.findIndex(item => item.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
