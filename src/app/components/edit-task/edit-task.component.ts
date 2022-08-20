import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/task';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private taskService:TaskService) {
  }
  faBell = faBell
  title: string = "";
  description:string = "";
  reminder: boolean = false;
  i:number=0;
  addReminder(){
    this.reminder = !this.reminder
  };
  ngOnInit(): void {
    this.i = this.route.snapshot.params['id'];
    let Task:Task = this.taskService.getTask(this.i);
    console.log(typeof(Task));
    console.log(Task);
    this.title = Task.title;
    this.description = Task.text;
    this.reminder = Task.reminder;
    console.log(this.title);
    console.log(this.description);
    console.log(this.reminder);
  }

  saveEdit(){
    let Task:Task = this.taskService.getTask(this.i);
    let task:Task = {
      id: Task.id,
      title: this.title,
      text: this.description,
      day: Task.day,
      time: Task.time,
      reminder: this.reminder,
      completed: Task.completed,
      expire: new Date(),
    };
    this.taskService.editTask(task).subscribe(resp=>{
      console.log('good')
    });
  }
}
