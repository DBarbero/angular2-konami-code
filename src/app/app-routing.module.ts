import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainExampleComponent } from './components/main-example/main-example.component'

const routes: Routes = [
  { path: '', children: [], component: MainExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
