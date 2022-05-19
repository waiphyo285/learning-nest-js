import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  //   @Post()
  //   public async createUser(@Body() body): Promise<User> {
  //     return this.userService.createUser(body);
  //   }
}
