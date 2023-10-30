import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Task } from 'src/app/model/task.model';


@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent implements OnInit {
  @Input() task: Task | null = null

  @Input() taskedited: Task | null = null;
  @Output() addTask = new EventEmitter();
  @Output() editTask = new EventEmitter();

  buttonText:string = 'Adicionar tarefa'

  public formTask: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    status: ['', Validators.required],
    tags: this.formBuilder.array([]),
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formTask.patchValue({ ...this.task });

    this.task?.tags?.forEach(item => {
      this.addTag(item)
    })
    console.log(this.formTask.value);
  }

  ngOnChanges() {
    if (this.taskedited) {
      this.formTask.reset({
        ...this.taskedited,
        date: new Date(this.taskedited.date).toISOString().split('T')[0]
      });
      this.buttonText = 'Atualizar tarefa'
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  get tags() {
    return this.formTask.get('tags') as FormArray;
  }

  public newTask = new Task();

  submitTask() {
    if (this.formTask.invalid) {
      this.markFormGroupTouched(this.formTask);
    } else {
      if (this.taskedited) {
        this.editTask.emit({ ...this.formTask.value, id: this.taskedited.id })

      } else {
        this.addTask.emit(this.formTask.value);
      }
      this.formTask.reset()
      this.newTask = new Task();
    }
    this.buttonText = 'Adicionar tarefa'
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  get title() { return this.formTask.get("title"); }
  get description() { return this.formTask.get("description"); }
  get date() { return this.formTask.get("date"); }
  get status() { return this.formTask.get("status"); }

  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required));
  }

  apagarTag() {
    this.tags.clear()
  }
}
