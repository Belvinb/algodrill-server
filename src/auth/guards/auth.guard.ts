import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from '../public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtSerive: JwtService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
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
