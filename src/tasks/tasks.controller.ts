import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { UpdateTaskStatusDto } from 'src/tasks/dto/update-task-status.dto';
import { getAllTasksFilterDto } from 'src/tasks/dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: getAllTasksFilterDto): Promise<Task[]> {
    return this.tasksService.getTasks(filterDto);
  }
  @Get(':id')
  getSpecificTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getSpecificTask(id);
  }

  @Delete(':id')
  deleteSpecificTask(@Param('id') id: string) {
    return this.tasksService.deleteSpecificTask(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id/status')
  patchSpecificTask(
    @Param('id') id: string,
    @Body() UpdateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<void> {
    const { status } = UpdateTaskStatusDto;
    return this.tasksService.patchSpecificTask(id, status);
  }
}
