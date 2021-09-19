import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';

// User controller.
@Controller('/user')
class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  async getById(@Param('id') id: string) {
    const user = await this.userService.getById(id);

    return user || null;
  }
}

export { UserController };
