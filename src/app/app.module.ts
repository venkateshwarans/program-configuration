import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicModule } from 'ng-dynamic-component';
import { CollectionComponent } from './components/collection/collection.component';
import { ProgramComponent } from './components/program/program.component';
import { ProgramHeaderComponent } from './components/program-header/program-header.component';
import { IssueCertificateComponent } from './components/issue-certificate/issue-certificate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionCreationComponent } from './components/question-creation/question-creation.component';
import { UploadContentComponent } from './components/upload-content/upload-content.component';
import { PlayerComponent } from './components/player/player.component';
import { LibraryFiltersComponent } from './components/library-filters/library-filters.component';
import { LibraryComponent } from './components/library/library.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ProgramComponent,
    ProgramHeaderComponent,
    IssueCertificateComponent,
    DashboardComponent,
    QuestionCreationComponent,
    UploadContentComponent,
    PlayerComponent,
    LibraryFiltersComponent,
    LibraryComponent,
    DesktopHeaderComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule.withComponents([CollectionComponent, IssueCertificateComponent, PlayerComponent,
      ProgramHeaderComponent, DashboardComponent, QuestionCreationComponent, UploadContentComponent ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
