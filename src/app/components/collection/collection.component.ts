import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash-es';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() collectionComponentInput: any;
  public collection;
  constructor() { }

  ngOnInit() {
    this.collection = _.get(this.collectionComponentInput, 'collectionComponent');
  }

}
