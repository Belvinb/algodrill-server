import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDto, SuccessDto } from './dto/auth.dto';
import { User } from 'src/user/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.validateUser(input.email);
    if (!user) throw new UnauthorizedException();

    const isPasswordMatch = await bcrypt.compare(input.password, user.password);
    if (!isPasswordMatch) throw new UnauthorizedException();
    return this.signIn(user);
  }

  async validateUser(input: string): Promise<User> {
    return this.userService.findUserByEmail(input);
  }

  async signIn(user: any): Promise<{ accessToken: string }> {
    const tokenPayload = { email: user.email, id: user._id };
    const accessToken = await this.jwtService.signAsync(tokenPayload);
    return { accessToken };
  }

  async register(data: RegisterDto): Promise<SuccessDto> {
    return await this.userService.registerUser(data);
  }
}
