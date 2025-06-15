import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  password: string;
}

export class RegisterDto extends LoginDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  username: string;
}

export class SuccessDto {
  @ApiProperty()
  status: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  _id: Types.ObjectId;
}
