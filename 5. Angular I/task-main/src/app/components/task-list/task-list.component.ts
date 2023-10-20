import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input() tasks: Task[] = []
  @Output() handleTask = new EventEmitter();

  taskLog: Task | null = null
  @Output() sendLogs = new EventEmitter();

  @Input() filtro!: string 


  selectedTask(task: Task) {
    this.handleTask.emit({ ...task });
    this.sendLogs.emit(this.taskLog)
  }

  onFilter(filtro: string){
    const arr = this.tasks
    arr.filter(filtro  => filtro.status == this.filtro)  
  }
}