import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { GalleryselectorComponent } from './galleryselector/galleryselector.component';
import { LifecycleMethodsComponent } from './lifecycle-methods/lifecycle-methods.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DatabindingComponent,
    DirectivesComponent,
    AboutComponent,
    HomeComponent,
    GalleryselectorComponent,
    LifecycleMethodsComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      //localhost:4200/home -> load HomeComponent
      { path: 'about', component: AboutComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'databinding', component: DatabindingComponent },
      { path: 'lifecycle-methods', component: LifecycleMethodsComponent },
      { path: '**', redirectTo: 'home' },
      //{path: '**', redirectTo: 'home', pathMatch: 'full'},

      //{path: '**', component: pageNotFoundComponent},
    ]           //,{useHash: true},
    )],
  //exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
