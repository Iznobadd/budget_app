import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import * as argon from 'argon2';
import { JwtPayload } from 'src/auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) throw new ConflictException("L'email existe déjà");

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await argon.hash(dto.password),
      },
    });

    const { password, ...result } = newUser;

    return result;
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async me(user: JwtPayload) {
    console.log(user);
    return user;
  }
}
