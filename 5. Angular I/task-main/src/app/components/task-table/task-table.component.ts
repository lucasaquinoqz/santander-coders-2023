import { Component, Input } from '@angular/core';
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

  // ngOnInit() {
  //   for(let task of this.tasks){
  //     if (task.status === "Backlog") {
  //       this.tasksBacklog.push(task)
  //     }
  //     if (task.status === "Andamento") {
  //       this.tasksAndamento.push(task)
  //     }
  //     if (task.status === "Concluido") {
  //       this.tasksConcluido.push(task)
  //     }
  //   }
  // }
  


  // filtraConcluido(task: Task){
  //   if(task.status == "Concluido"){
  //     console.log(task)
  //   }
  //   return task
  // }
}
