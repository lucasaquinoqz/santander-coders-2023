import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Task } from 'src/app/model/task.model';


@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent implements OnInit{
  @Input() task: Task | null = {
    date: '',
    description: '',
    title: '',
    status: '',
  };


    public formTask: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    status: ['', Validators.required],
    tags: this.formBuilder.array([]),
  })

  constructor(private formBuilder: FormBuilder){}

  @Output() addTask = new EventEmitter();

  get tags() {
    return this.formTask.get('tags') as FormArray;
  }


  submitTask() {
    if(this.formTask.invalid) return
    this.addTask.emit(this.formTask.value);
    this.formTask.reset();
  }

  ngOnInit() {
    /*     this.formTask.setValue({ ...this.task }); */

    this.formTask.patchValue({ ...this.task });

    this.task?.tags?.forEach(item => {
      this.addTag(item)
    })


    console.log(this.formTask.value);
  }

  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required));
  }
}
