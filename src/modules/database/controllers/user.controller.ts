import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from '../services/user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  public async one(@Param() id: any) {
    console.log(id);
    // return this.userService.getById(id);
  }
}
