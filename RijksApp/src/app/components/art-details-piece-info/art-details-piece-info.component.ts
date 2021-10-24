import { Component, Input, OnInit } from '@angular/core';
import { ArtDetailsObject, ArtObjectPage } from 'src/app/interfaces/art-details-response';

@Component({
  selector: 'app-art-details-piece-info',
  templateUrl: './art-details-piece-info.component.html',
  styleUrls: ['./art-details-piece-info.component.less']
})
export class ArtDetailsPieceInfoComponent implements OnInit {

  @Input() artObject : ArtDetailsObject | undefined
  @Input() artObjectPage: ArtObjectPage | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
