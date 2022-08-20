import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/service/task.service';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValidation } from './dateValidation';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addNewTask = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    date: new FormControl(new Date(), DateValidation.isValid)
  });
  faBell = faBell
  Tasks: Task[] = []
  reminder: boolean = false
  expire:Date = new Date();
  constructor(private router:Router, private taskService:TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks=>{
      this.Tasks = tasks
    })
  }
  addDeadline(){
    if(this.reminder){
      return "Remove deadline"
    }else{
      return "Add dealine"
    }
  }

  addReminder(){
    this.reminder = !this.reminder
  }

  setId(){
    if (this.Tasks.length == 0){
      return 1
    }else{
      return this.Tasks[this.Tasks.length-1].id + 1
    }
  }

  isReminder(){
    if (this.reminder){
      return this.expire
    }else{
      return new Date();
    }
  }
  // .getDate()?.value?.getDate() + "/" + this.taskService.addZero(Number(this.getDate()?.value?.getMonth()) + 1) + "/" + this.getDate()?.value?.getFullYear()
  isEmptyDescription(){
    if (this.getDescription()?.value == ""){
      return ""
    }else{
      return this.getDescription()
    }
  }

  addTask(){
    let task: Task = {
      id: this.setId(),
      title: String(this.getTitle()?.value),
      text: String(this.isEmptyDescription()),
      day: this.taskService.today.getDate() + "/" + this.taskService.addZero(this.taskService.today.getMonth() + 1) + "/" + this.taskService.today.getFullYear(),
      time: this.taskService.today.getHours() + ":" + this.taskService.addZero(this.taskService.today.getMinutes()),
      reminder: this.reminder,
      completed: false,
      expire: this.isReminder()
    }
    this.addNewTask.get('date')?.reset(new Date())
    this.taskService.addTask(task).subscribe(resp=>{
      console.log('good')
    });
  }

  getTitle(){
    return this.addNewTask.get('title')
  }
  getDescription(){
    return this.addNewTask.get('description')
  }
  getDate(){
    return this.addNewTask.get('date')
  }

}
