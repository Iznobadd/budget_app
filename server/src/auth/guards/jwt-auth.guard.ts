import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    if (!user && info && info.name === 'TokenExpiredError') {
      throw new UnauthorizedException('Token JWT expiré');
    } else if (!user) {
      throw new UnauthorizedException('Utilisateur non authentifié');
    }
    return user;
  }
}
