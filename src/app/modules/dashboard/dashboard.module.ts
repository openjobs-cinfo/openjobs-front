import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './shared/components/list/list.component';
import { DataViewModule } from 'primeng/dataview';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DataViewModule,
    SharedModule,
  ],
})
export class DashboardModule {}
