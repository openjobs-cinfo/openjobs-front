import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleRegistrationComponent } from './components/simple-registration/simple-registration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleRegistrationComponent,
  },
];

@NgModule({
  declarations: [SimpleRegistrationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
