import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CustomSidenavComponent} from './components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, CustomSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ezschool-mark1-2';
  collapsed=signal(false);

  sidenavwidth = computed(()=> this.collapsed() ? '65px': '250px');
}

/*
import {Component, computed, signal} from '@angular/core';
import {CustomSidenavComponent} from "../custom-sidenav/custom-sidenav.component";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [RouterOutlet, CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent
    ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']  // Corrected here
})
export class LayoutComponent {
  title = 'ezschool-mark1-2';
  menuCollapsed = signal(false)

  sidenavWidth = computed(() => this.menuCollapsed() ? '65px' : '250px');

}
 */

