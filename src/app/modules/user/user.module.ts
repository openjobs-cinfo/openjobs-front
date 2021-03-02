import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleRegistrationComponent } from './components/simple-registration/simple-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleRegistrationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [SimpleRegistrationComponent, ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
