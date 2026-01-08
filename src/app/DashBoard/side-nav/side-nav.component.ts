import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SideBarServiceService } from '../../Services/side-bar-service.service';
import { SchoolsVisitedComponent } from "../../SchoolsVisitedData/schools-visited/schools-visited.component";
import { DashboardTopNavComponent } from '../dashboard-top-nav/dashboard-top-nav.component';

@Component({
  selector: 'app-side-nav',
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink, NgIf, NgClass, MatIconModule,DashboardTopNavComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isExpanded: boolean = false;
  openedSubmenu: string | null = null;
  constructor(private router: Router,private sidebarService: SideBarServiceService) {}
  ngOnInit(): void {

    this.sidebarService.isExpanded$.subscribe(value => {
      this.isExpanded = value;
    });

    if(! localStorage.getItem("email")){
      this.router.navigate(['/signin'])
    }
  }

  // isExpanded = true;
  // toggleSidebar() {
  //   this.isExpanded = !this.isExpanded;
  // }

  logout() {
    this.router.navigate(['/signin'])
    localStorage.clear();
  }

  toggleSubmenu(menuName: string) {
    if (this.openedSubmenu === menuName) {
      this.openedSubmenu = null;
    } else {
      this.openedSubmenu = menuName;
    }
  }

  closeAllSubmenus() {
    this.openedSubmenu = null;
  }
}
