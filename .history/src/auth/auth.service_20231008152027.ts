import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'sign up' };
  }
  signin() {
    return { msg: 'sign in' };
  }
}
