import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  Tasks: Task[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
