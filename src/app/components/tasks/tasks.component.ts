import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/task';
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

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.Tasks = this.Tasks.filter((t) => t.id !== task.id)
    })
  }

}
