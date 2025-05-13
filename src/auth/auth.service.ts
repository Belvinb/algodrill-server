import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: any): Promise<any> {
    const user = await this.validateUser(input);
    if (!user) throw new UnauthorizedException();
    return this.signIn(user);
  }

  async validateUser(input: any): Promise<any> {
    return this.userService.findUserByEmail(input.email);
  }

  async signIn(user: any): Promise<any> {
    const tokenPayload = { email: user.email };
    const accessToken = await this.jwtService.signAsync(tokenPayload);
    return { accessToken };
  }
}
