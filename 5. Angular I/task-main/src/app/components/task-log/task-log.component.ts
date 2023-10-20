import { Component, Input } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.scss']
})
export class TaskLogComponent {
  @Input() taskLog: Task[] = []
}
