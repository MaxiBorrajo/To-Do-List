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
  today = new Date();
  reminder: boolean = false
  constructor(private router:Router, private taskService:TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=>{
      this.Tasks = tasks
    })
  }
  addZero(i:number) {
    let j = ""
    if (i < 10){
      j = "0" + i;
    }else{
      j=String(i)
    }
    return j;
  }
  addReminder(){
    this.reminder = !this.reminder
  }
  addTask(){
    let task: Task = {
      id: this.Tasks.length + 1,
      title: this.title,
      text: this.description,
      day: this.today.getDate() + "/" + this.addZero(this.today.getMonth() + 1) + "/" + this.today.getFullYear(),
      time: this.today.getHours() + ":" + this.addZero(this.today.getMinutes()),
      reminder: this.reminder,
      completed: false
    }
    this.taskService.addTask(task).subscribe(resp=>{
      console.log('good')
    });
  }

}
