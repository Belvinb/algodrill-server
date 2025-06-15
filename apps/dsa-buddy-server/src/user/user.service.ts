import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { RegisterDto, SuccessDto } from '../auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async registerUser(data: RegisterDto): Promise<SuccessDto> {
    const email = await this.findUserByEmail(data.email);
    if (email) throw new ConflictException('Email already exists');
    const user = new this.userModel(data);
    const result = await user.save();
    return { status: 200, message: 'success', _id: result._id };
  }
}
