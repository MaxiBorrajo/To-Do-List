import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { TASKS } from '../mock-task';
import { Task } from '../task';
import { Observable, of } from 'rxjs';

const httpOptions = {
  /*Esta constante es para especificar que el contenido que se mandara
  al servidor es un archivo tipo json */
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient:HttpClient) {
  }
  today = new Date();
  Tasks: Task[] = [];
  TASK:Task = {
    id: 0,
    title: '',
    text: '',
    day: '',
    time: '',
    reminder: false,
    completed: false,
    expire:new Date(),
    type: 0,
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
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions)
  }

  editTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.put<Task>(url, task, httpOptions)
  }

  updateCompleted(task:Task){
    const url = `${this.apiUrl}/${task.id}`
    return this.httpClient.put<Task>(url, task, httpOptions)
  }

  getTask(i:number){
    this.getTasks().subscribe(resp=>{
      this.Tasks = resp;
    })
    let index = this.Tasks.findIndex(task => task.id == i)
    return this.Tasks[index]
  }

  getTASK(i:number):Observable<Task>{
    const url = `${this.apiUrl}/${i}`;
    return this.httpClient.get<Task>(url, httpOptions)
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
}
