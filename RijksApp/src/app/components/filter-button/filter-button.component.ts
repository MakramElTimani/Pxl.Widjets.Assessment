import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.less']
})
export class FilterButtonComponent implements OnInit {

  @Output() filterClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: any){
    console.log('filter clicked');
    this.filterClicked.emit(e);
  }
}
