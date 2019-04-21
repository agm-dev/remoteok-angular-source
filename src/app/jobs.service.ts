import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Job } from './jobs/job'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private api:string

  constructor(private http:HttpClient) {
    this.api = 'https://brainl.es/remoteok/v1/remotejobs'
  }

  getJobs():Observable<Job[]> {
    return this.http.get<Job[]>(this.api)
      .pipe(
        tap(data => this.log(`fetched ${data.length-1} results`)),
        catchError(this.handleError<Job[]>('getJobs', [])),
      )
  }

  private log(message:string):void {
    console.log(`[jobs-service] ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} has failed`)
      console.error(error)
      return of (result as T)
    }
  }
}
