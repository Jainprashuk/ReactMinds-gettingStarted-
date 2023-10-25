import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { AboutreactComponent } from './mycomponents/aboutreact/aboutreact.component';
import { WhyreactComponent } from './mycomponents/whyreact/whyreact.component';
import { PrerequisitesComponent } from './mycomponents/prerequisites/prerequisites.component';
import { PlaygroundsComponent } from './mycomponents/playgrounds/playgrounds.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutreactComponent,
    WhyreactComponent,
    PrerequisitesComponent,
    PlaygroundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
