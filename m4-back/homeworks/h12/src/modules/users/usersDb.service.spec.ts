import { Test, TestingModule } from '@nestjs/testing';
import { UsersDbService } from './usersDb.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('UsersDbService', () => {
  let usersDbService: UsersDbService;
  let usersRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersDbService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    usersDbService = module.get<UsersDbService>(UsersDbService);
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('saveUser', () => {
    it('should save a user', async () => {
      const user = { id: '1', email: 'test@example.com', password: 'password' };
      jest.spyOn(usersRepository, 'save').mockResolvedValue(user as any);

      const result = await usersDbService.saveUser(user);
      expect(result).toEqual(user);
    });
  });

  describe('getAllUsers', () => {
    it('should return all users without passwords', async () => {
      const users = [
        { id: '1', email: 'test1@example.com', password: 'password1' },
        { id: '2', email: 'test2@example.com', password: 'password2' },
      ];
      const total = users.length;
      jest.spyOn(usersRepository, 'findAndCount').mockResolvedValue([users, total] as any);

      const result = await usersDbService.getAllUsers(1, 10);
      expect(result).toEqual([
        { id: '1', email: 'test1@example.com' },
        { id: '2', email: 'test2@example.com' },
      ]);
    });
  });

  describe('getUserById', () => {
    it('should return a user by id without password and isAdmin fields', async () => {
      const user = { id: '1', email: 'test@example.com', password: 'password', isAdmin: true, orders: [] };
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(user as any);

      const result = await usersDbService.getUserById('1');
      expect(result).toEqual({ id: '1', email: 'test@example.com', orders: [] });
    });

    it('should throw NotFoundException if user is not found', async () => {
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);

      await expect(usersDbService.getUserById('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('findUserByEmail', () => {
    it('should return a user by email', async () => {
      const user = { id: '1', email: 'test@example.com', password: 'password' };
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(user as any);

      const result = await usersDbService.findUserByEmail('test@example.com');
      expect(result).toEqual(user);
    });
  });

  describe('updateUser', () => {
    it('should update a user and return the updated user', async () => {
      const user = { id: '1', email: 'test@example.com', password: 'password' };
      const updateData = { email: 'updated@example.com' };
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(user as any);
      jest.spyOn(usersRepository, 'save').mockResolvedValue({ ...user, ...updateData } as any);

      const result = await usersDbService.updateUser('1', updateData);
      expect(result).toEqual({ ...user, ...updateData });
    });

    it('should return null if user is not found', async () => {
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);

      const result = await usersDbService.updateUser('1', { email: 'updated@example.com' });
      expect(result).toBeNull();
    });
  });

  describe('deleteUser', () => {
    it('should delete a user and return the result', async () => {
      const deleteResult = { affected: 1 };
      jest.spyOn(usersRepository, 'delete').mockResolvedValue(deleteResult as any);

      const result = await usersDbService.deleteUser('1');
      expect(result).toEqual(deleteResult);
    });

    it('should return null if user is not found', async () => {
      const deleteResult = { affected: 0 };
      jest.spyOn(usersRepository, 'delete').mockResolvedValue(deleteResult as any);

      const result = await usersDbService.deleteUser('1');
      expect(result).toBeNull();
    });
  });
});
