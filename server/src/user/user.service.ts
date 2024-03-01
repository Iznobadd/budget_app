import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async listUsers() {
    try {
      const users = await this.prisma.user.findMany();

      return users;
    } catch (err) {
      console.log(err);
    }
  }
}
