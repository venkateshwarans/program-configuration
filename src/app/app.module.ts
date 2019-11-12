import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicModule } from 'ng-dynamic-component';
import { CollectionComponent } from './components/collection/collection.component';
import { ProgramComponent } from './components/program/program.component';
import { ProgramHeaderComponent } from './components/program-header/program-header.component';
import { IssueCertificateComponent } from './components/issue-certificate/issue-certificate.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ProgramComponent,
    ProgramHeaderComponent,
    IssueCertificateComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule.withComponents([CollectionComponent, IssueCertificateComponent, ProgramHeaderComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
