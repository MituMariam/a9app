import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageModuleModule } from './page-module/page-module.module';
import { WikiSearchModule } from './wiki-search/wiki-search.module';
import { PhotoModule } from './photo/photo.module';
import { MultiFormsModule } from './multi-forms/multi-forms.module'


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { CardsComponent } from './cards/cards.component';
import { SingleCardComponent } from './cards/single-card/single-card.component';
import { TypingComponent } from './typing/typing.component';
import { PipeComponent } from './pipe/pipe.component';
import { ConvertPipe } from './pipe/convert.pipe';
import { DirectivesComponent } from './directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent,
    CardsComponent,
    SingleCardComponent,
    TypingComponent,
    PipeComponent,
    ConvertPipe,
    DirectivesComponent,
    // CompaniesComponent,
    // BioComponent
    // PageComponent
    // CollectionHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PageModuleModule,
    WikiSearchModule,
    PhotoModule,
    MultiFormsModule,
    // TemplateFormModule,
    // ReactiveFormsModule,
    AppRoutingModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
