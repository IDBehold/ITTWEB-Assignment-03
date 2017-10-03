import { Component, OnInit } from '@angular/core';
import {Workout} from './workout';
import {WorkoutsService} from '../workouts.service';
import {Exercise} from "./exercise";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [ WorkoutsService ]
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[

    ];


  constructor(
    private workoutService: WorkoutsService,
  ) {  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .then(workouts => this.workouts = workouts);
  }

  ngOnInit() {
    // this.getWorkouts();
  }

}
