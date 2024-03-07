import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from '../dto';
import { Category, User } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateCategoryDto) {
    try {
      const category = await this.prisma.category.create({
        data: {
          name: createDto.name,
          emoji: createDto.emoji,
          color: createDto.color,
          userId: createDto.user.id,
        },
      });
      return category;
    } catch (err) {
      throw new err();
    }
  }

  async listCategories(user: User): Promise<Category[]> {
    try {
      const categories = await this.prisma.category.findMany({
        where: {
          user,
        },
      });

      return categories;
    } catch (err) {
      console.log(err);
    }
  }
}
