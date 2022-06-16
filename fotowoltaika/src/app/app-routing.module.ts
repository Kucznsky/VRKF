import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RoofDetailsComponent } from './roof-details/roof-details.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'details', component: RoofDetailsComponent },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
