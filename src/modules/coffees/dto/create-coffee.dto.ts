import { IsString, IsArray } from 'class-validator';


export class CreateCoffeeDto {
  @IsString({ message: 'Coffee name must be string type!' })
  readonly name: string;

  @IsString({ message: 'Coffee brand name must be string type!' })
  readonly brand: string;

  @IsString({ each: true, message: 'Coffee flavors must be string type!' })
  @IsArray({ message: 'Coffee flavors must be an array of coffee falvors!' })
  readonly flavors: string[];
}
