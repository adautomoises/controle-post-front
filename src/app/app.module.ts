import { InterceptorRequest } from './global/config/InterceptorResquest';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Toast } from './global/toast';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HandlerError } from './global/config/HandlerError';

// PRIMENG
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    TooltipModule,
  ],
  providers: [
    MessageService,
    Toast,
    { provide: ErrorHandler, useClass: HandlerError },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: InterceptorRequest },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
