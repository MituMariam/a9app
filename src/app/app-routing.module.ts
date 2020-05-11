import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageModuleRoutingModule } from './page-module/page-module-routing.module';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { TypingComponent } from './typing/typing.component';
import { PipeComponent } from './pipe/pipe.component';
import { DirectivesComponent } from './directives/directives.component';
import { PageComponent } from './page-module/page.component';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';
import { PhotoShowComponent } from './photo/photo-show.component';
import { CreditCardFormComponent } from './multi-forms/credit-card-form/credit-card-form.component';
import { MultiFormsComponent } from './multi-forms/multi-forms.component';

const routes: Routes = [

  // {
  //   path:'',redirectTo:'home', pathMatch:'full'
  // },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'cards',component:CardsComponent
  },
   {
    path:'typing',component:TypingComponent
  },
  {
    path:'pipe',component:PipeComponent
  },
  {
    path:'directives',component:DirectivesComponent
  },
  // {
  //   path:'creditcard',component:CreditCardComponent
  // },
  {
    path:'page',component:PageComponent
  },
  {
    path:'wiki',component:WikiSearchComponent
  },
  {
    path:'photo',component:PhotoShowComponent
  },
  {
    path:'creditForm',component:CreditCardFormComponent
  },
  {
    path:'multiForm',component:MultiFormsComponent
  }

  
  // {
  //   path:'**',component:PgNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
