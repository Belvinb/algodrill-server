import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtSerive: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers?.authorization; // 'Bearer <token>'
    const token = authorization?.split(' ')[1];
    if (!token) throw new UnauthorizedException();
    try {
      const verifiedToken = await this.jwtSerive.verifyAsync(token);
      request.email = verifiedToken.email;
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
