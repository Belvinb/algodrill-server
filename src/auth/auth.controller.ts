import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { Public } from './public.decorator';
import { LoginDto, RegisterDto, SuccessDto } from './dto/auth.dto';
import { ApiResponse } from '@nestjs/swagger';

interface RequestWithEmail extends Request {
  email: string;
}
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @ApiResponse({ type: String })
  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.authenticate(body);
  }

  @Public()
  @ApiResponse({ type: SuccessDto })
  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Get('me')
  getUserInfo(@Req() request: RequestWithEmail) {
    return request.email;
  }
}
