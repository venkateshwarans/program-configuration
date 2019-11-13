import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash-es';
@Component({
  selector: 'app-program-header',
  templateUrl: './program-header.component.html',
  styleUrls: ['./program-header.component.css']
})
export class ProgramHeaderComponent implements OnInit {

  @Input() headerComponentInput: any;
  @Output() menuClick = new EventEmitter<any>();

  public menu;
  public userSession;
  constructor() { }

  ngOnInit() {
    console.log(this.headerComponentInput);

    this.menu = _.get(this.headerComponentInput.programSession, 'headerComponent');
    this.userSession = this.headerComponentInput.userSession;
  }

  filterBy(prop: string) {
    return this.menu.tabs.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
  public showComponent(component) {
    this.menuClick.emit(component);
  }
}
