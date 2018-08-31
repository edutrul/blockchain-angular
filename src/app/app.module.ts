import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CertificateComponent } from './certificate/certificate.component';
import { PrintcertificateComponent } from './certificate/printcertificate/printcertificate.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificateComponent,
    PrintcertificateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
