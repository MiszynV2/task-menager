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
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskStatusDto } from 'src/dto/update-task-status.dto';
import { getAllTasksFilterDto } from 'src/dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: getAllTasksFilterDto): Task[] {
    if (!Object.keys(filterDto).length) {
      return this.tasksService.getTasks();
    }
    return this.tasksService.getTasksWithFilters(filterDto);
  }

  @Get(':id')
  getSpecificTask(@Param('id') id: string) {
    return this.tasksService.getSpecificTask(id);
  }
  @Delete(':id')
  deleteSpecificTask(@Param('id') id: string) {
    return this.tasksService.deleteSpecificTask(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id/status')
  patchSpecificTask(
    @Param('id') id: string,
    @Body() UpdateTaskStatusDto: UpdateTaskStatusDto,
  ): Task {
    const { status } = UpdateTaskStatusDto;
    return this.tasksService.patchSpecificTaskStatus(id, status);
  }
}
