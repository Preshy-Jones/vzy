import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    type: String,
    example: 'Precious',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    type: String,
    example: 'adedibuprecious@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'The age of the user',
    type: Number,
    example: 25,
  })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({
    description: 'The address of the user',
    type: String,
    example: 'Lagos',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
