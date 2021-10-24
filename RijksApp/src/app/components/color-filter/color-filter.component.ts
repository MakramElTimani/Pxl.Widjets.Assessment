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

    e.target.classList.add('selected');
    this.colorSelected.emit(color);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.selectedColor)
    if(this.selectedColor){
      var color = this.selectedColor!;
      setTimeout(function(){
        var item = document.querySelector(`.color-item[data-color="${color.trim()}"]`) as HTMLElement;
        item.classList.add('selected');
      }, 500)
    }
  }
}
