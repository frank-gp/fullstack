import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersDbService } from '../users/usersDb.service';
import * as jwt from 'jsonwebtoken';
import { SignUpDto } from './dtos/signup.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';

describe('AuthService', () => {
  let authService: AuthService;

  const mockUsersDbService = {
    findUserByEmail: () => Promise.resolve(undefined),
  };

  const mockJwtService = {
    // sign: (payload) => jwt.sign(payload, 'testSecret'),
  };

  const mockUser: SignUpDto = {
    email: 'user1@gmail.com',
    name: 'New User 2',
    password: 'P4ss123@',
    address: 'new address',
    phone: '987654321',
    country: 'New Country',
    city: 'New City',
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersDbService,
          useValue: mockUsersDbService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('authServiceInstance.helloAuth', () => {
    it('should return "hello word"', async () => {
      const result = await authService.helloAuth();
      expect(result).toBe('hello Auth Service');
    });
  });

  // it('signUp() creates a new user with an encrypted password', async () => {
  //   const user = await authService.signUp(mockUser);
  //   expect(user).toBeDefined();
  //   // expect(user.password).not.toEqual(mockUser.password);
  // });
});
