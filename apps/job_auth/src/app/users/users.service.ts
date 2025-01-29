import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';
import { Prisma } from 'prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    return this.prismaService.user.findMany();
  }
  async createUser(createUserInput: CreateUserInput) {
    return this.prismaService.user.create({
      data: {
        ...createUserInput,
        password: await hash(createUserInput.password, 10),
      },
    });
  }

  async getUser(args: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({ where: args });
  }
}
