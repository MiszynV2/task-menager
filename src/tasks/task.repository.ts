import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { promises } from 'readline';
import { TaskStatus } from './tasks-status.enum';
import { getAllTasksFilterDto } from './dto/get-tasks-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  //   async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //     const task: Task = this.create({
  //       ...CreateTaskDto,
  //       status: TaskStatus.OPEN,
  //     });
  //     await this.save(task);
  //     return task;
  //   }
  //   async deleteSpecificTask(id): Promise<Task> {
  //     const found = await this.findOne({
  //       where: [{ id: id }],
  //     });
  //     await this.delete(found);
  //     return found;
  //   }
}
