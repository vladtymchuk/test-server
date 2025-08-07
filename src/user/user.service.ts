import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async test() {
    return 'test';
  }
}
