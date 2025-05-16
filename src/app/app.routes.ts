import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
    {
      path: '',
      component: HomepageComponent,
      children: [
        { path: '', component: HomepageComponent },
        // more routes can go here
      ]
    }
  ];
  
