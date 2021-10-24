import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router  } from '@angular/router';
import { ArtDetailsResponse } from 'src/app/interfaces/art-details-response';
import { ArtService } from 'src/app/services/art.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.less']
})
export class ArtDetailsComponent implements OnInit {

  objectNumber: string = '';
  artDetailsResponse: ArtDetailsResponse | undefined;

  constructor(private router: ActivatedRoute, private artService: ArtService) { 
    
  }

  ngOnInit(): void {
    this.objectNumber = this.router.snapshot.params.id;
    let that = this;
    this.artService.getArtByObjectNumber(this.objectNumber, null).subscribe({
      next(response){
        that.artDetailsResponse = response;
        that.artDetailsResponse!.artObject.acquisition.date = new Date(that.artDetailsResponse!.artObject.acquisition.date).toLocaleDateString()
      }
    });
  }
}
