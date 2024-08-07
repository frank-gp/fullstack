import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjM2MwYTRlMy03ZGQ5LTQ2ZjgtYjYxMC02ODgyZjhjOWJlNDkiLCJpZCI6ImMzYzBhNGUzLTdkZDktNDZmOC1iNjEwLTY4ODJmOGM5YmU0OSIsImVtYWlsIjoiZW1haWxAbWFpbC5jb20iLCJpYXQiOjE3MTkwOTE5ODAsImV4cCI6MTcxOTk1NTk4MH0.8PORJqdhIyjIJECV1FS8m-0OxoPLUnZ5bbPcSZaPvF4
    const token = request.headers['authorization']?.split(' ')[1] ?? '';
    if (!token) {
      throw new UnauthorizedException('Bearer token not found');
    }

    try {
      const secret = process.env.JWT_SECRET;
      const payload = this.jwtService.verify(token, { secret });
      payload.iat = new Date(payload.iat * 1000);
      payload.exp = new Date(payload.exp * 1000);
      payload.roles = ['admin'];
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Bearer token not valid');
    }
  }
}
