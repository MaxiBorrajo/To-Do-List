import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { DatePipe } from '@angular/common';
import { ObjectUnsubscribedError } from 'rxjs';
import { TaskService } from 'src/app/service/task.service';
import { faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  faBell = faBell
  title:string = '';
  description:string = '';
  Tasks: Task[] = []
  date: Date = new Date();
  reminder: boolean = false
  constructor(private router:Router, private taskService:TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=>{
      this.Tasks = tasks
    })
  }
  addReminder(){
    this.reminder = !this.reminder
  }
  addTask(){
    let task: Task = {
      id: this.Tasks.length + 1,
      title: this.title,
      text: this.description,
      day: this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear(),
      time: this.date.getHours() + ":" + this.date.getMinutes(),
      reminder: this.reminder
    }
    this.taskService.addTask(task).subscribe(resp=>{
      console.log('good')
    })
     this.router.navigate(['']);
  }

}
