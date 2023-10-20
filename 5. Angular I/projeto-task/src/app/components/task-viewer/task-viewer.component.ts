import { Component, Input } from '@angular/core';
import { IListTask } from 'src/app/app.component';

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.scss']
})
export class TaskViewerComponent {

  @Input() tasks: IListTask[] = []

}
