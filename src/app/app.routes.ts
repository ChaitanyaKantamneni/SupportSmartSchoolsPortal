import { Routes } from '@angular/router';
import { SchoolsVisitedComponent } from './SchoolsVisitedData/schools-visited/schools-visited.component';
import { SideNavComponent } from './DashBoard/side-nav/side-nav.component';

export const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: 'SchoolsVisited',
        component: SchoolsVisitedComponent
      }
    ]
  }
];
