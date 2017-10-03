import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Workout} from './workouts/workout';
import {Exercise} from './workouts/exercise';

@Injectable()
export class WorkoutsService {
  private apiUrl = 'http://salty-scrubland-78292.herokuapp.com/api'; // URL to API
  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) {
  }

  getWorkouts(): Promise<Workout[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as Workout[])
      .catch(this.handleError);
  }

  getWorkout(id: string): Promise<Workout> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Workout)
      .catch(this.handleError);
  }

  createWorkout(name: string): Promise<Workout> {
    const url = `${this.apiUrl}/workout`;
    return this.http
      .post(this.apiUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Workout)
      .catch(this.handleError);
  }

  createExercise(workoutId: string, exercise: Exercise): Promise<Workout> {
    const url = `${this.apiUrl}/exercise`;
    exercise.id = workoutId;
    return this.http
      .post(this.apiUrl, JSON.stringify({exercise}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Workout)
      .catch(this.handleError);
  }

  countUp(id: string): Promise<Workout> {
    const url = `${this.apiUrl}/countUp/${id}`;
    return this.http.put(url, {})
      .toPromise()
      .then(res => res.json().data as Workout)
      .catch(this.handleError);
  }

  deleteWorkout(id: string): Promise<void> {
    const url = `${this.apiUrl}/${id}}`
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error occured', error);
    return Promise.reject(error.message || error);
  }
}
