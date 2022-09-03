import { NumberFormatStyle } from '@angular/common';
import { DeclareFunctionStmt } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/task';
import { DateValidation } from '../add-task/dateValidation';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private taskService:TaskService,
    private changeDetector:ChangeDetectorRef) {
  }
  i:number=0;
  id:number = 0;
  day:string = '';
  time:string = '';
  reminder:boolean = false;
  completed:boolean = false;
  today:any = new Date();
  currentDate:Date = new Date(this.today.getFullYear(), this.today.getMonth(), (this.today.getDate()+1))
  editTask = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    date: new FormControl(new Date(), DateValidation.isValid),
    type: new FormControl(0)
  });

  ngOnChanges():void{
  }
  
  ngOnInit(): void {
    this.i = this.route.snapshot.params['id'];
    this.taskService.getTASK(this.i).subscribe(task=>{
      this.id = task.id;
      this.getTitle()?.setValue(task.title)
      this.getDescription()?.setValue(task.text)
      this.day = task.day;
      this.reminder = task.reminder;
      this.completed = task.completed;
      this.getDate()?.setValue(new Date(task.expire))
      this.getType()?.setValue(Number(task.type))
      this.changeDetector.detectChanges();
    });
  }
  
  addReminder(){
    this.reminder = !this.reminder
  };
  

  saveChanges(){
    let task:Task = {
      id: this.id,
      title: String(this.getTitle()?.value),
      text: String(this.isEmptyDescription()),
      day: this.day,
      time: this.time,
      reminder: this.reminder,
      completed: this.completed,
      expire: this.getDate()?.getRawValue(),
      type: this.getType()?.getRawValue()
    };
    this.taskService.editTask(task).subscribe(resp=>{
      this.router.navigate([""])
    });
  }

  getTitle(){
    return this.editTask.get('title')
  }
  getDescription(){
    return this.editTask.get('description')
  }
  getDate(){
    return this.editTask.get('date')
  }
  getType(){
    return this.editTask.get('type')
  }

  addDeadline(){
    if(this.reminder){
      return "Remove deadline"
    }else{
      return "Add dealine"
    }
  }


  isEmptyDescription(){
    if (this.getDescription()?.value == ""){
      return ""
    }else{
      return this.getDescription()?.value
    }
  }

  setImportant(){
    this.getType()?.setValue(1)
  }
  setTask(){
    this.getType()?.setValue(0)
  }
  setNotForget(){
    this.getType()?.setValue(2)
  }
}


