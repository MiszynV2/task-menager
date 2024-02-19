import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { getAllTasksFilterDto } from 'src/tasks/dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto): Promise<Task[]> {
    let queryBuilder = this.taskRepository.createQueryBuilder();
    console.log(filterDto);

    if (filterDto.status) {
      queryBuilder = queryBuilder.where({ status: filterDto.status });
    }

    if (filterDto.search) {
      queryBuilder = queryBuilder.andWhere(
        'LOWER(description) LIKE :search OR LOWER(title) LIKE :search',
        {
          search: `%${filterDto.search.toLowerCase()}%`,
        },
      );
    }

    const tasks = await queryBuilder.getMany();
    return tasks;
  }

  async getSpecificTask(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne({
      where: [{ id }],
    });

    if (!found) {
      throw new NotFoundException(`task with id ${id} is not found`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task: Task = this.taskRepository.create({
      ...createTaskDto,
      status: TaskStatus.OPEN,
    });
    await this.taskRepository.save(task);
    return task;
  }
  async deleteSpecificTask(id): Promise<object> {
    const result = await this.taskRepository.delete(id);
    console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException(`task with id ${id} is not found`);
    }
    return result;
  }

  async patchSpecificTask(id: string, status: TaskStatus): Promise<void> {
    const task = this.getSpecificTask(id);
    const result = await this.taskRepository
      .createQueryBuilder()
      .update(Task)
      .set({ status: status })
      .where(task)
      .execute();
    console.log(result);
  }
}
