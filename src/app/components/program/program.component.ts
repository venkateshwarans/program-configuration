import { Component, OnInit } from '@angular/core';
import { userSession } from '../../services/userSession';
import { CollectionComponent } from '../collection/collection.component';
import { ProgramHeaderComponent } from '../program-header/program-header.component';
import { IssueCertificateComponent } from '../issue-certificate/issue-certificate.component';
import { programSession } from '../../services/programSession';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  public component;
  public headerComponent;
  public inputs;
  constructor() { }

  ngOnInit() {
    this.inputs = {
      headerComponentInput: programSession
    };
    this.headerComponent = ProgramHeaderComponent;
    this.component = CollectionComponent;
  }



}
