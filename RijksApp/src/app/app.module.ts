import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './components/home/home.component';
import { ArtDetailsComponent } from './components/art-details/art-details.component';
import { ArtsListComponent } from './components/arts-list/arts-list.component';
import { ArtItemComponent } from './components/art-item/art-item.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { FilterComponent } from './components/filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms';
import { ColorFilterComponent } from './components/color-filter/color-filter.component';
import { ArtColorsGraphComponent } from './components/art-colors-graph/art-colors-graph.component';
import { NgxEchartsModule } from 'ngx-echarts';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'art-details/:id',
    component: ArtDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    FilterButtonComponent,
    HomeComponent,
    ArtDetailsComponent,
    ArtsListComponent,
    ArtItemComponent,
    FilterComponent,
    ColorFilterComponent,
    ArtColorsGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    NgSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
