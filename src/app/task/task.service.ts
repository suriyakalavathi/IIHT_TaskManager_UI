import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TaskApplicationService {

  private apiUrl = 'http://localhost:9080/tasks';

  constructor(private http: HttpClient) { }

  addTask(task: Task) {
    return this.http.post(this.apiUrl, JSON.stringify(task), httpOptions);
  }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  updateTask(task: Task) {
    return this.http.put(this.apiUrl, JSON.stringify(task), httpOptions);
  }

  endTask(task) {
    return this.http.delete(this.apiUrl + '/' + task.id);
  }

  /* addTask(task: Task): Observable <any> {
     console.log('inside task serice' + ' URL' + this.apiUrl + 'httpOptions test' + httpOptions.headers + 'JSON raw' + task);
     return this.http.post(this.apiUrl, JSON.stringify(task), httpOptions).pipe(tap(_ => console.log('Here in service')),
       catchError(this.handleError<any>('updateProduct'))

       );
   }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
