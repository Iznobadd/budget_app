import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/auth/decorators/user.decorator';
import { JwtPayload } from 'src/auth/dto/auth.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('me')
  async me(@User() user: JwtPayload) {
    return await this.userService.me(user);
  }
}
