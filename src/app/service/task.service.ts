import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { TASKS } from '../mock-task';
import { Task } from '../task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient:HttpClient) {
  }
  Tasks: Task[] = [];
  TASK:Task = {
    id: 0,
    title: '',
    text: '',
    day: '',
    time: '',
    reminder: false,
    completed: false
  }
  private apiUrl = 'http://localhost:5000/tasks'
  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.delete<Task>(url)
  }

  addTask(task:Task):Observable<Task>{
    return this.httpClient.post<Task>(this.apiUrl, task)
  }

  editTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.put<Task>(url, task)
  }

  getTask(i:number){
    this.getTasks().subscribe(resp=>{
      this.Tasks = resp;
      // let Task:Task = this.Tasks[i-1];
      // this.TASK.id = Task.id;
      // this.TASK.title = Task.title;
      // this.TASK.text = Task.text;
      // this.TASK.day = Task.day;
      // this.TASK.time = Task.time;
      // this.TASK.reminder = Task.reminder;
      // this.TASK.completed = Task.completed;
    })
    console.log(this.Tasks[i-1])
    return this.Tasks[i-1]
  }
}
