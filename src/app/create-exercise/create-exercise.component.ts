import { Component, OnInit } from '@angular/core';
import {WorkoutsService} from "../workouts.service";
import {Workout} from "../workouts/workout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {
  workouts: Workout[];

  constructor( private workoutService: WorkoutsService,
               private router: Router) { }


  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .then(response => {
        this.workouts = response;
      });
  }

  ngOnInit() {
    this.getWorkouts();
  }
  createExercise(id: string, exercise: string, description: string, set: number, rep: number): void{
    this.workoutService.createExercise(id, exercise, description, set, rep).then(() => this.router.navigate(['/']));
  }
}
