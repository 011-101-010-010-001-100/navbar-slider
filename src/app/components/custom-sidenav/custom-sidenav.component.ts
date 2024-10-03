import {Component, computed, Input, signal, ViewEncapsulation} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatListItem, MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

export type MenuItem= {
  label: string;      // The display name for the menu item
  icon: string;       // The icon associated with the menu item
  route: string;      // The route to navigate to when the item is clicked
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive,MatListItem],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'card_membership',
      label: 'Transfer Certificate',
      route: 'transfer-certificate'
    },
    {
      icon: 'settings',
      label: 'Setting',
      route: 'settings'
    },
    {
      icon: 'logout',
      label: 'Logout',
      route: 'logout'
    },

  ])
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean) {
    this.sideNavCollapsed.set(val);
  }; //this input comes from app.component.html where it is used in property binding

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32': '100');

  sidenavCollapsed() {

  }
}
