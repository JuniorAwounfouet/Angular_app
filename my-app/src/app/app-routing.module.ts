import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormQuizComponent } from './form-quiz/form-quiz.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quiz', component: FormQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
