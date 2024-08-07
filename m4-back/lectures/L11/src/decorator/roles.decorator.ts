import { SetMetadata } from '@nestjs/common';
import { RolesEnum } from 'src/roles.enum';

export const Roles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);
