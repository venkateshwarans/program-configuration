import { Component, OnInit } from '@angular/core';
import { userSession } from '../../services/userSession';
import { CollectionComponent } from '../collection/collection.component';
import { ProgramHeaderComponent } from '../program-header/program-header.component';
import { IssueCertificateComponent } from '../issue-certificate/issue-certificate.component';
import { programSession } from '../../services/programSession';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  public component;
  public headerComponent;
  public inputs;
  public outputs;

  private componentMapping = {
    dashboardComponent: DashboardComponent,
    issueCertificateComponent: IssueCertificateComponent,
    collectionComponent: CollectionComponent
  };
  constructor() { }

  ngOnInit() {
    this.inputs = {
      headerComponentInput: {
        programSession,
        userSession
      },
      collectionComponentInput: {
        programSession,
        userSession
      }
    };
    this.outputs = {

    };
    this.headerComponent = ProgramHeaderComponent;
  }

  menuClickHandler(event) {
    this.component = this.componentMapping[event];
  }
}
