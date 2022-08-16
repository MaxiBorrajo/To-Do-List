import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { DatePipe } from '@angular/common';
import { ObjectUnsubscribedError } from 'rxjs';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title:string = '';
  description:string = '';
  Tasks: Task[] = TASKS;
  date: Date = new Date();
  constructor(private router:Router, private taskService:TaskService) {}
  ngOnInit(): void {
  }
  addTask(){
    this.router.navigate(['']);
  }

}
