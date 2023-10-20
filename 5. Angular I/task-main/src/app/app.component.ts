import { Component } from '@angular/core';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [];
  selectedTask: Task | null = null
  taskLog: Task[] = []

  onAddTask(task: Task) {
    this.listTask.push(task)
  }

  handleTask(task: Task) {
    this.selectedTask = task
    this.taskLog.push(task)
  }

  fecharDetalhes(){
    this.selectedTask = null
  }

}
