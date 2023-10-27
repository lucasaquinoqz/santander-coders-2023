import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent {
  @Input() tasks: Task[] = []
  @Input() tasksBacklog!: Task[]
  @Input() tasksAndamento!: Task[]
  @Input() tasksConcluido!: Task[]

  @Output() handleTask = new EventEmitter();

  taskLog: Task | null = null
  @Output() sendLogs = new EventEmitter();

  selectedTask(task: Task) {
    this.handleTask.emit({ ...task });
    this.sendLogs.emit(this.taskLog)
  }
}
