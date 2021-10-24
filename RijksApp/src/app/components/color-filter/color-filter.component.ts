import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Facet } from 'src/app/interfaces/facet';

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.less']
})
export class ColorFilterComponent implements OnInit {

  @Input() colorList: Facet[] = [];

  @Input() selectedColor: string | undefined;

  @Output() colorSelected = new EventEmitter<Facet>();

  constructor() { }

  ngOnInit(): void {
  }

  colorItemSelected(e: any, color: Facet){
    document.querySelectorAll('.color-item').forEach(item => {
      item.classList.remove('selected');
    })
    color.key = color.key.trim();
    e.target.classList.add('selected');
    this.colorSelected.emit(color);
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.selectedColor){
      var color = this.selectedColor!;
      setTimeout(function(){
        var item = document.querySelector(`.color-item[data-color="${color.trim()}"]`) as HTMLElement;
        if(item) item.classList.add('selected');
      }, 500)
    }
  }
}
