import { Component, Input, OnInit } from '@angular/core';
import { WebImage } from 'src/app/interfaces/art-details-response';
import { NavigationEnd, Router  } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-art-details-image',
  templateUrl: './art-details-image.component.html',
  styleUrls: ['./art-details-image.component.less']
})
export class ArtDetailsImageComponent implements OnInit {

  @Input() webImage: WebImage | undefined;

  maxHeight: number = window.innerHeight;
  private history: string[] = []
  constructor(private location: Location, private thisRouter: Router) {
    this.thisRouter.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
   }

  ngOnInit(): void {
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
