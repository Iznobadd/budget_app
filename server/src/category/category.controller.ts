import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CreateCategoryDto } from '../dto';
import { CategoryService } from './category.service';
import { JwtAuthGuard } from '../auth/guards';
import { GetUser } from '../auth/decorators';
import { User } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('create')
  createCategory(@GetUser() user: User, @Body() dto: CreateCategoryDto) {
    dto.user = user;
    return this.categoryService.create(dto);
  }

  @Get('all')
  findAll(@GetUser() user: User) {
    return this.categoryService.listCategories(user);
  }
}
