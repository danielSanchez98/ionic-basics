import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  
  { path: '', redirectTo: "place", pathMatch: "full" },
  {
    path: 'place',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/place/place.module').then( m => m.PlacePageModule)
      },
      {
        path: ":placeId",
        loadChildren: () => import('./pages/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
      }
      
    ]
    
  }
 
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
