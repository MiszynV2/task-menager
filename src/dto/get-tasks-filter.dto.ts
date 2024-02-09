import { TaskStatus } from 'src/tasks/tasks.model';

export class getAllTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}
