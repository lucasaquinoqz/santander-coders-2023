import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MoedaBRPipe } from './moeda-br.pipe';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskLogComponent } from './components/task-log/task-log.component';
import { RedIfTodayPassesDirective } from './directives/red-if-today-passes.directive';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskFormReactiveComponent } from './components/task-form-reactive/task-form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    MoedaBRPipe,
    TaskDetailComponent,
    TaskLogComponent,
    RedIfTodayPassesDirective,
    TaskFilterComponent,
    TaskTableComponent,
    TaskFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
