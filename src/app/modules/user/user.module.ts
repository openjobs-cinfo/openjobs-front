import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { SimpleRegistrationComponent } from './components/simple-registration/simple-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'register/simple',
    component: SimpleRegistrationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [SimpleRegistrationComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CheckboxModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class UserModule {}
