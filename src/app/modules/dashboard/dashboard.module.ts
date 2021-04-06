import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChipModule } from 'primeng/chip';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './shared/components/list/list.component';
import { DataViewModule } from 'primeng/dataview';
import { SharedModule } from '../shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

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
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    ChipModule,
  ],
})
export class DashboardModule {}
