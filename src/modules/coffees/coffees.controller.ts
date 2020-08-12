import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete } from '@nestjs/common';
// import { Response } from 'express';

@Controller('coffees')
export class CoffeesController {
  // @Get()
  // findAll(@Res() response: Response): void {
  //   response.send('This action returns all coffees!');
  // }

  @Get()
  findAll(): string {
    return 'This action returns all coffees!';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns ${id} string!`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body: { name: string }): string {
    return body.name;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: { name: string },
  ): string {
    return `New name for ${id} is ${body.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `${id} deleted!`;
  }
}
