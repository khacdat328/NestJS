import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AuthDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  singup(@Body() dto: AuthDto) {
    return this.authService.signup();
  }
  @Post('signin')
  singin() {
    return this.authService.signin();
  }
}
