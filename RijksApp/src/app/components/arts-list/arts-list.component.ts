import { animate, style } from '@angular/animations';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NgTypeToSearchTemplateDirective } from '@ng-select/ng-select/lib/ng-templates.directive';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { ArtObject } from 'src/app/interfaces/art-object';
import { FacetList } from 'src/app/interfaces/facet-list';
import { SelectedFilter } from 'src/app/interfaces/selected-filter';
import { ArtService } from 'src/app/services/art.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-arts-list',
  templateUrl: './arts-list.component.html',
  styleUrls: ['./arts-list.component.less']
})
export class ArtsListComponent implements OnInit {

  artsList: ArtObject[] = [];
  filters: FacetList[] = [];
  selectedFilter: SelectedFilter = {
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

  public myOptions: NgxMasonryOptions = {
    gutter: 20,
    animations: {
      show: [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ],
      hide: [
        style({ opacity: '*' }),
        animate('400ms ease-in', style({ opacity: 0 })),
      ]
    }
  };
  // get reference
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent | undefined;

  pagNumber: number = 0;
  search: string = '';

  scrollY: number = 0;

  doStuff(e: any){
    this.masonry?.layout();
  }

  constructor(private artService: ArtService, private stateService: StateService) { }
  state: any;
  ngOnInit(): void {
    this.state = this.stateService.state$.getValue() || {};
    this.artsList = this.state.artsList || this.artsList;
    this.filters = this.state.filters || this.filters;
    this.selectedFilter = this.state.selectedFilter || this.selectedFilter;
    this.pagNumber = this.state.pagNumber || this.pagNumber;
    this.search = this.state.search || this.search;

    let scroll: number = 0;
    this.scrollY = scroll = this.state.scrollY || 0;
    
    setTimeout(function(){
      window.scroll(0, scroll);
    }, 100);

  }

  newSearch: boolean = false;

  enterPressed(e: string){
    this.selectedFilter = {
      datingPeriod: undefined,
      imgonly : undefined,
      involvedMaker : undefined,
      material : undefined,
      normalized32ColorHex : undefined,
      technique : undefined,
      toppieces : undefined,
      type : undefined,
      sort: undefined
    };
    this.pagNumber = 0;

    const that = this;
    setTimeout(function(){
      that.searchData(e);
    }, 10);
  }

  searchData(e: string) {
    var that = this;
    if (this.search !== e) this.newSearch = true;
    this.artService
      .getArts(e, 'en', null, this.pagNumber, 10,
        this.selectedFilter.involvedMaker!, this.selectedFilter.type!, this.selectedFilter.material!,
        this.selectedFilter.technique!, this.selectedFilter.datingPeriod!, this.selectedFilter.normalized32ColorHex!,
        true, this.selectedFilter.toppieces, this.selectedFilter.sort!)
      .subscribe({
        next(response) {
          if (that.newSearch) {
            that.artsList = response.artObjects;
            that.filters = response.facets;
            that.newSearch = false;
          }
          else {
            that.artsList.push(...response.artObjects);
          }

          that.state = {
            pagNumber: that.pagNumber,
            artsList: that.artsList,
            filters: that.filters,
            selectedFilter: that.selectedFilter,
            search: e,
            scrollY: that.scrollY
          };
          that.stateService.state$.next(that.state);
        },
        error(msg) {
          console.log(msg);
        }
      })
    that.pagNumber++;
  }

  showMatches(e: SelectedFilter) {
    this.selectedFilter = e;
    this.pagNumber = 0;
    this.newSearch = true;
    this.searchData(this.search);
    this.toggleFilter();
  }

  filterOpen: boolean = false;
  toggleFilter() {
    const filterContainer = document.querySelector('.filter-container') as HTMLElement;
    filterContainer.style.display = this.filterOpen ? 'none' : 'block';
    this.filterOpen = !this.filterOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && this.artsList.length > 0) {
      this.searchData(this.search);
    }
    this.scrollY = window.scrollY;
    this.state.scrollY = window.scrollY;
    // this.stateService.state$.next(this.state);
  }

}
