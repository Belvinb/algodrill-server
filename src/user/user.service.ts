import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findUserByEmail(email: string): Promise<any> {
    return { email };
  }
}
