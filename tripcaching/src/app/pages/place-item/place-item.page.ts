import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../models/place.model'
@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.page.html',
  styleUrls: ['./place-item.page.scss'],
})
export class PlaceItemPage implements OnInit {
  @Input() placeItem: Place;

  constructor() { }

  ngOnInit() {
  }

}
