import { Component } from '@angular/core';

export interface IListTask {
  titulo: string;
  descricao: string;
  data: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listTask: IListTask[] = [];

  onAddTask(task: IListTask) {
    this.listTask.push(task)
  }
}
