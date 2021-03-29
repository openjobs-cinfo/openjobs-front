import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';

import { SimpleRegistrationComponent } from './components/simple-registration/simple-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';

const routes: Routes = [
  {
    path: 'register/simple',
    component: SimpleRegistrationComponent,
  },
  {
    path: 'register/complete',
    component: CompleteProfileComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [
    SimpleRegistrationComponent,
    ProfileComponent,
    CompleteProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CheckboxModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    CardModule,
    ProgressBarModule,
  ],
})
export class UserModule {}
