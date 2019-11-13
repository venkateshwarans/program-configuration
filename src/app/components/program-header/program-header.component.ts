import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash-es';
@Component({
  selector: 'app-program-header',
  templateUrl: './program-header.component.html',
  styleUrls: ['./program-header.component.css']
})
export class ProgramHeaderComponent implements OnInit {

  @Input() headerComponentInput: any;
  public menu;
  public userSession;
  constructor() { }

  ngOnInit() {
    this.menu = _.get(this.headerComponentInput.programSession, 'headerComponent');
    this.userSession = this.headerComponentInput.userSession;
  }

}
