import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  Tasks: Task[] = []
  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=>{
      this.Tasks = tasks
    })
  }

}
