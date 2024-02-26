import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthDto } from 'src/dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(dto: AuthDto) {
    const user = await this.authService.validateUser(dto);
    console.log(user);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
