import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent {
  filtro!: string
  @Output() sendFilter = new EventEmitter();

  filtrando() {
    // const filtrado = this.filtro
    this.sendFilter.emit({ filtro: this.filtro });
  }

}
