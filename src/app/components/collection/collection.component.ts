import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash-es';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() collectionComponentInput: any;
  public collectionProgramContext;
  public collectionUserContext;
  public collection;
  constructor() { }

  ngOnInit() {
    this.collectionProgramContext = _.get(this.collectionComponentInput, 'programSession');
    this.collectionUserContext = _.get(this.collectionComponentInput, 'userSession');
    this.collection = _.get(this.collectionProgramContext, 'collectionComponent');

  }

}
