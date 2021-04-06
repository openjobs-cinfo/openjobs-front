import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedModule } from '../shared/shared.module';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthService } from 'src/app/shared/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    ButtonModule,
    SharedModule,
    ProgressSpinnerModule,
  ],
  declarations: [LoginComponent, RecoverPasswordComponent, AboutUsComponent],
  providers: [AuthService],
})
export class AuthModule {}
