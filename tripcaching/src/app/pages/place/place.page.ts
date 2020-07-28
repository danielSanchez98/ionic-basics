import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../models/place.model'

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  places : Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.getPlaces().subscribe(
      (response: any) =>{
        if(response.places){
          console.log(response.places)
          this.places=response.places;
        }
      },
      (err) => {
        console.log(err)
      }



    )
  }

}
