import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { AboutreactComponent } from './mycomponents/aboutreact/aboutreact.component';
import { WhyreactComponent } from './mycomponents/whyreact/whyreact.component';
import { PrerequisitesComponent } from './mycomponents/prerequisites/prerequisites.component';
import { PlaygroundsComponent } from './mycomponents/playgrounds/playgrounds.component';
import { MycompilerComponent } from './mycomponents/mycompiler/mycompiler.component';
import { ChatboxComponent } from './mycomponents/chatbox/chatbox.component';
import { QuizComponent } from './mycomponents/quiz/quiz.component';
import { YoutubeComponent } from './mycomponents/youtube/youtube.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutreactComponent,
    WhyreactComponent,
    PrerequisitesComponent,
    PlaygroundsComponent,
    MycompilerComponent,
    ChatboxComponent,
    QuizComponent,
    YoutubeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
