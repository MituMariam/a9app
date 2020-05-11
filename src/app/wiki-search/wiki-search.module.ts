import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WikiSearchRoutingModule } from './wiki-search-routing.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { WikiSearchComponent } from './wiki-search.component';


@NgModule({
  declarations: [SearchbarComponent, PagelistComponent, WikiSearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    WikiSearchRoutingModule
  ]
})
export class WikiSearchModule { }
