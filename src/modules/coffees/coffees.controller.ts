import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
// import { Response } from 'express';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  // @Get()
  // findAll(@Res() response: Response): void {
  //   response.send('This action returns all coffees!');
  // }

  @Get()
  findAll(@Query() { limit, offset }: { limit: number, offset: number }): Coffee[] {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Coffee {
    return this.coffeesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto): CreateCoffeeDto {
    return createCoffeeDto;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): string {
    return `New name for ${id} is ${updateCoffeeDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `${id} deleted!`;
  }
}
