import { Component, EventEmitter, Output } from '@angular/core';

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
