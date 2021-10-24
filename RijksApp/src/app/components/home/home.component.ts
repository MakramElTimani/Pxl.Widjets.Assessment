import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArtResponse } from 'src/app/interfaces/art-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @Output() sendArtList = new EventEmitter<ArtResponse>();
  constructor() { }

  ngOnInit(): void {
  }
}
