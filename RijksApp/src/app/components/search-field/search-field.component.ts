import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less']
})
export class SearchFieldComponent implements OnInit {

  @Output() keyPressed = new EventEmitter<string>();
  @Output() enterPressed = new EventEmitter<string>();

  @Input() search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  keyPress(e: any) {
    this.keyPressed.emit(e.target.value);
    if(e.charCode === 13){
      this.enterPressed.emit(e.target.value);
    }
  }
}
