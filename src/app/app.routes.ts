import { Routes } from '@angular/router';
import {SettingsComponent} from './pages/settings/settings.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {TransferCertificateComponent} from './pages/transfer-certificate/transfer-certificate.component';
import {LogoutComponent} from './pages/logout/logout.component';

let CommentComponent: any;
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {path: 'transfer-certificate',
  component: TransferCertificateComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
