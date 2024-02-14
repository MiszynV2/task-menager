import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { getAllTasksFilterDto } from 'src/tasks/dto/get-tasks-filter.dto';
@Injectable()
export class TasksService {
  // getTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: getAllTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) => task.title.match(search) || task.description.match(search),
  //     );
  //   }
  //   return tasks;
  // }
  // //: Task[] dlaczego nie dziala
  // getSpecificTask(id): Task {
  //   const found = this.tasks.find((task) => id === task.id);
  //   if (!found) {
  //     throw new NotFoundException(`task with id ${id} is not found`);
  //   }
  //   return found;
  // }
  // createTask(CreateTaskDto: CreateTaskDto): Task {
  //   //const { title, description } = CreateTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     ...CreateTaskDto,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteSpecificTask(id): Task {
  //   let findTask = this.getSpecificTask(id);
  //   const deleted = this.tasks.find((task) => id === findTask.id);
  //   this.tasks = this.tasks.filter((task) => id !== findTask.id);
  //   return deleted;
  // }
  // //task status must be a valid status
  // //search term must be not empty
  // patchSpecificTaskStatus(id: string, status: TaskStatus) {
  //   let findTaskToPatch = this.getSpecificTask(id);
  //   findTaskToPatch.status = status;
  //   return findTaskToPatch;
  // }
}
