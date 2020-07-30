import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../models/place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private placesService : PlacesService
  ) { 
    this.place={
      id: '',
      title: '',
      imgUrl:'',
      imgThumbUrl:'',
      comments:[]
  }
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has("placeId")){
          this.router.navigate(["/place"]);
        }
        const placeDetailId = paramMap.get("placeId");
        console.log(placeDetailId)
        this.placesService.getPlace(placeDetailId).subscribe(
          (response: any) =>{
            if(response){
              this.place=response[0];
            }
          },
          (err) => {
            console.log(err)
          }
        )
      }
    )
    
  }

}
