import { Component, OnInit } from '@angular/core';
import { userSession } from '../../services/userSession';
import * as _ from 'lodash-es';
import { CollectionComponent } from '../collection/collection.component';
import { ProgramHeaderComponent } from '../program-header/program-header.component';
import { IssueCertificateComponent } from '../issue-certificate/issue-certificate.component';
import {programSession} from '../../services/programSession';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UploadContentComponent } from '../upload-content/upload-content.component';
import { QuestionCreationComponent } from '../question-creation/question-creation.component';
import { PlayerComponent } from '../player/player.component';
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
  public isDefaultTabSet;
  public defaultView;

  private componentMapping = {
    dashboardComponent: DashboardComponent,
    issueCertificateComponent: IssueCertificateComponent,
    collectionComponent: CollectionComponent,
    uploadComponent: UploadContentComponent,
    questionCreationComponent: QuestionCreationComponent,
    playerComponent: PlayerComponent
  };
  constructor() { }

  ngOnInit() {
    this.isDefaultTabSet = _.get(programSession, 'defaultActiveTab');
    if (this.isDefaultTabSet) {
      // this.component = this.defaultView.
     const tab = _.find(this.isDefaultTabSet, (obj) => {
       return obj.roles.includes(userSession.role);
      });
      this.defaultView = _.find(programSession['headerComponent'].tabs, {'index': tab.activeTab}).onClick.component;
      this.component = this.componentMapping[this.defaultView];
    }
    this.inputs = {
      headerComponentInput: {
        programSession,
        userSession
      },
      collectionComponentInput: {
        programSession,
        userSession
      },

    };
    this.outputs = {

    };
    this.headerComponent = ProgramHeaderComponent;
  }

  menuClickHandler(event) {
    this.component = this.componentMapping[event];
  }
}
