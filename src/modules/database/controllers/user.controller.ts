import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateUserInterface, UserInterface } from 'src/models';
import { UserService } from '../services/user.service';

// User controller.
@Controller('/user')
class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    const allUsers = await this.userService.getAll();

    return {
      data: allUsers,
      statusCode: 200,
      message: 'Successfull request.',
    };
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    const user = await this.userService.getById(id);

    return {
      data: user,
      statusCode: 200,
      message: 'Successfull request.',
    };
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: string) {
    const deletedResult = await this.userService.deleteById(id);

    return {
      data: deletedResult,
      statusCode: 200,
      message: 'Successfull request.',
    };
  }

  @Post()
  async create(@Body() user: CreateUserInterface) {
    const newUser = await this.userService.create(user);

    return {
      data: newUser,
      statusCode: 200,
      message: 'Successfull request.',
    };
  }

  @Put('/:id')
  async update(@Param('id') _id: string, @Body() user: UserInterface) {
    const updateResult = await this.userService.update({ ...user, _id });

    if (!updateResult) {
      return {
        data: null,
        statusCode: 200,
        errMessage: 'Unsuccessfull request.',
      };
    }

    const updatedUser = await this.userService.getById(user._id);

    return {
      data: updatedUser,
      statusCode: 200,
      message: 'Successfull request.',
    };
  }
}

export { UserController };
