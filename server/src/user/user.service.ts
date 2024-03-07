import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async me(user: User) {
    const me = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    return me;
  }

  async listUsers() {
    try {
      const users = await this.prisma.user.findMany();

      return users;
    } catch (err) {
      console.log(err);
    }
  }
}
