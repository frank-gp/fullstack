// L10/test/app.e2e-spec.ts

//
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import * as request from 'supertest';

const userId = '9b62dce3-82e8-42c3-ba0b-2ff53c4c6955';
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjYyZGNlMy04MmU4LTQyYzMtYmEwYi0yZmY1M2M0YzY5NTUiLCJpZCI6IjliNjJkY2UzLTgyZTgtNDJjMy1iYTBiLTJmZjUzYzRjNjk1NSIsImVtYWlsIjoidXNlcjJAZ21haWwuY29tIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNzE5NDE0MTM1LCJleHAiOjE3MjAyNzgxMzV9.PgpmIXgxcAp3zh2pTAWyijccM4-eZX-aeuLK-v9bnOg';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    // Cambiar de beforeEach a beforeAll
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it.skip('true is true', () => {
  //   expect(true).toBe(true);
  // });

  it('Get /users/ Returns an array of users with an OK status code', async () => {
    const req = await request(app.getHttpServer())
      .get('/users')
      .set('Authorization', token);

    expect(req.status).toBe(200);
    expect(req.body).toBeInstanceOf(Array);
  });

  it('Get /users/:id returns an user with an OK status code', async () => {
    const req = await request(app.getHttpServer())
      .get('/users/' + userId)
      .set('Authorization', token);

    expect(req.status).toBe(200);
    expect(req.body).toBeInstanceOf(Object);
  });

  it('Get /users/:id thows a NotFoundException if the user is not found', async () => {
    const req = await request(app.getHttpServer())
      .get('/users/9b62dce3-82e8-42c3-ba0b-2ff53c4c6950')
      .set('Authorization', token);

    expect(req.status).toBe(400);
    expect(req.body.message).toBe('User not found');
  });

  it('Get /users/:id thows an error if id is not a UUID', async () => {
    const req = await request(app.getHttpServer())
      .get('/users/123')
      .set('Authorization', token);

    expect(req.status).toBe(400);
    expect(req.body.message).toBe('Validation failed (uuid is expected)');
    expect(req.body).toBeInstanceOf(Object);
  });

  it.skip('POST /auth/signup creates a user with an OK status code', async () => {
    const req = await request(app.getHttpServer()).post('/auth/signup').send({
      email: 'user3456@gmail.com',
      name: 'New User 34',
      password: 'P4ss123@',
      address: 'new address',
      phone: '987654321',
      country: 'New Country',
      city: 'New City',
    });

    expect(req.status).toBe(200);
    expect(req.body).toBeInstanceOf(Object);
  });

  afterAll(async () => {
    await app.close();
  });
});
