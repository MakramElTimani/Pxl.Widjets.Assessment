import { Component, OnInit, Input } from '@angular/core';
import { ArtObject } from 'src/app/interfaces/art-object';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.less']
})
export class ArtItemComponent implements OnInit {
  
  @Input() artItem: ArtObject | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
