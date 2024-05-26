import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forecast', component: ForecastComponent }
];