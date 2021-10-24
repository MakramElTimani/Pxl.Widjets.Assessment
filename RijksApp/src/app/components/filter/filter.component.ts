import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Facet } from 'src/app/interfaces/facet';
import { FacetList } from 'src/app/interfaces/facet-list';
import { SelectedFilter } from 'src/app/interfaces/selected-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],

})
export class FilterComponent implements OnInit {

  @Input() filters: FacetList[] = [];

  selectedCar: number = 1;

  principalMakers: Facet[] = [];
  types: Facet[] = [];
  datingPeriod: Facet[] = [];
  places: Facet[] = [];
  materials: Facet[] = this.filters.length > 0 ? this.filters.find(x => x.name === 'material')!.facets : [];
  techniques: Facet[] = [];
  normalized32ColorsHex: Facet[] = [];

  @Input() selectedFilter: SelectedFilter = {
    involvedMaker: undefined,
    type: undefined,
    technique: undefined,
    datingPeriod: undefined,
    normalized32ColorHex: undefined,
    imgonly: undefined,
    toppieces: undefined,
    material: undefined,
    sort: undefined
  };

  @Output() showMatchesClicked = new EventEmitter<SelectedFilter>();
  @Output() closeClicked = new EventEmitter();

  changeSelect(e: any, data: string){
    type x = keyof SelectedFilter;
    let str = data as x;
    this.selectedFilter[str] = e.key ? e.key : e as string;
  }

  showMatches(){
    this.showMatchesClicked.emit(this.selectedFilter);
  }

  closeFilter(){
    this.closeClicked.emit();
  }
  constructor() { }

  ngOnInit(): void {
    if(this.filters.length > 0){
      this.setFilters();
    }
  }

  setFilters() : void{
    this.materials = this.filters.find(x => x.name === 'material')!.facets;
    this.places = this.filters.find(x => x.name === 'place')!.facets;
    this.principalMakers = this.filters.find(x => x.name === 'principalMaker')!.facets;
    this.techniques = this.filters.find(x => x.name === 'technique')!.facets;
    this.types = this.filters.find(x => x.name === 'type')!.facets;
    this.normalized32ColorsHex = [];
    if(this.filters.find(x => x.name === 'normalized32Colors.hex')!.facets.length > 0){
      this.filters.find(x => x.name === 'normalized32Colors.hex')!.facets.forEach(item => {
        var check = this.normalized32ColorsHex.find(t => t.key.trim() === item.key.trim());
        if(!check){
          item.key.trim();
          this.normalized32ColorsHex.push(item);
        }
      });
    }
    this.datingPeriod = this.filters.find(x => x.name === 'dating.period')!.facets;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.filters && changes.filters.currentValue.length > 0) {
       this.setFilters();
    }
  }

}
