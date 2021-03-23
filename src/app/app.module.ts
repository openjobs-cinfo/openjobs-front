import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { SharedModule } from './modules/shared/shared.module';
import { WindowService } from './modules/shared/window.service';
import { GlobalService } from './services/global.service';
import { SharedModule as SharedModuleGlobal } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SharedModuleGlobal,
  ],
  providers: [
    AuthGuard,
    WindowService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
