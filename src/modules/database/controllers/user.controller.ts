import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateUserInterface, UserInterface } from 'src/models';
import { UserService } from '../services/user.service';

// User controller.
@Controller('/user')
class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  async getById(@Param('id') id: string) {
    const user = await this.userService.getById(id);

    if (user) {
      return {
        data: user,
        statusCode: 200,
        message: 'User successfully executed',
      };
    } else {
      return {
        data: null,
        statusCode: 404,
        message: `User with id - "${id}" not found`,
      };
    }
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: string) {
    const deletedResult = await this.userService.deleteById(id);

    if (deletedResult.deletedCount) {
      return {
        data: null,
        statusCode: 200,
        message: 'User successfully deleted',
      };
    } else {
      return {
        data: null,
        statusCode: 404,
        message: `User with id - "${id}" not found`,
      };
    }
  }

  @Post()
  async create(@Body() user: CreateUserInterface) {
    const newUser = await this.userService.create({ ...user, _id: uuidv4() });

    if (newUser) {
      return {
        data: newUser,
        statusCode: 200,
        message: 'User successfully created.',
      };
    } else {
      return {
        data: null,
        statusCode: 500,
        message: 'Something goest wrong while creating new user.',
      };
    }
  }

  @Put('/:id')
  async update(@Param('id') _id: string, @Body() user: UserInterface) {
    const updateResult = await this.userService.update({ ...user, _id });

    if (!updateResult || !updateResult.modifiedCount) {
      return {
        data: null,
        statusCode: 404,
        errMessage: 'User not found',
      };
    }

    const updatedUser = await this.userService.getById(user._id);

    return {
      data: updatedUser,
      statusCode: 200,
      message: 'User successfully updated',
    };
  }
}

export { UserController };
