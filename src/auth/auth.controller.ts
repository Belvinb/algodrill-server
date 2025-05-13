import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { Request } from 'express';

interface RequestWithEmail extends Request {
  email: string;
}
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() body: any) {
    return this.authService.authenticate(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Req() request: RequestWithEmail) {
    return request.email;
  }
}
