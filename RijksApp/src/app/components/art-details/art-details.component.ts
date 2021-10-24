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
  maxHeight: number = window.innerHeight;

  private history: string[] = []
  constructor(private router: ActivatedRoute, private artService: ArtService, private location: Location, private thisRouter: Router) { 
    this.thisRouter.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  ngOnInit(): void {
    this.objectNumber = this.router.snapshot.params.id;
    let that = this;
    this.artService.getArtByObjectNumber(this.objectNumber, null).subscribe({
      next(response){
        that.artDetailsResponse = response;
        that.artDetailsResponse!.artObject.acquisition.date = new Date(that.artDetailsResponse!.artObject.acquisition.date).toLocaleDateString()
        console.log(that.artDetailsResponse)
      }
    });
  }

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.thisRouter.navigateByUrl('/')
    }
  }
}
