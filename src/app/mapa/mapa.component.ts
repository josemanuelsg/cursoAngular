import { Component } from '@angular/core';
import { MapService } from '../services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
  providers:[MapService]
})
export class MapaComponent {
  public mapEdited:boolean;
  public lat:number;
  public lng:number;
  constructor (private mapService: MapService){

  }

  ngOnInit(){
    this.mapService.getLocationInfo(this.lat, this.lng).subscribe({
      next: (data: any) => {
        this.mapEdited = true;
        // this.form.controls['location'].setValue(data.display_name);
      }, error: (err: any) => {
        console.error(err.message)
      }
    })
  }



}


