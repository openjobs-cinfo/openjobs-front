import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ButtonModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
