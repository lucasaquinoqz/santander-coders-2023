import { Component, EventEmitter, Input, Output} from '@angular/core';12
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  @Input() task: Task | null = null
  @Output() closeDetail = new EventEmitter()

  close(){
    this.closeDetail.emit()
  }
}
