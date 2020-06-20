import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../models/goal';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/goals';

  constructor(
    private http: HttpClient
  ) { }

  index(){
    return this.http.get<Goal[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log('goal service index is fccked');
        return throwError('dee goal service index is fccked');
      })
    )
  }

  create(newGoal){
    return this.http.post<Goal>(this.url, newGoal)
    .pipe(
      catchError((err: any) => {
        console.log('goal service create is fccked');
        return throwError('dee goal service create is fccked');
      })
    );
  }

  update(goal: Goal){
    return this.http.put<Goal>(this.url + "/" + goal.id, goal)
    .pipe(
      catchError((err: any) =>{
        console.log('updated service is fucked');
        return throwError('update  service schmupdate');
      })
    )
  }

  delete(id){
    
    return this.http.delete(this.url + "/" + id)
    .pipe(
      catchError((err: any) => {
        console.log('error in service delete');
        return throwError('oh no, error deleting goal in the service level!');
      })
    )
  }


}
