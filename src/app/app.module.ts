import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    CreateWorkoutComponent,
    CreateExerciseComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    WorkoutsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
