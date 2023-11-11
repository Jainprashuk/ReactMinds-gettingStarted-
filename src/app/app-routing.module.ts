import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutreactComponent } from './mycomponents/aboutreact/aboutreact.component';
import { WhyreactComponent } from './mycomponents/whyreact/whyreact.component';
import { PrerequisitesComponent } from './mycomponents/prerequisites/prerequisites.component';
import { MycompilerComponent } from './mycomponents/mycompiler/mycompiler.component';
import { PlaygroundsComponent } from './mycomponents/playgrounds/playgrounds.component';
import { QuizComponent } from './mycomponents/quiz/quiz.component';
import { YoutubeComponent } from './mycomponents/youtube/youtube.component';





const routes: Routes = [
  { path: '', component: AboutreactComponent, outlet: 'secondary' },
  { path: 'aboutreact', component: AboutreactComponent, outlet: 'secondary' },

  { path: 'whyreact', component: WhyreactComponent , outlet: 'secondary'    },
  { path: 'prerequisites', component: PrerequisitesComponent , outlet: 'secondary'    },
  { path: 'playgrounds', component: PlaygroundsComponent , outlet: 'secondary'    },
  { path: 'mycompiler', component: MycompilerComponent , outlet: 'secondary'    },
  { path: 'quiz', component: QuizComponent , outlet: 'secondary'    },
  { path: 'youtube', component: YoutubeComponent , outlet: 'secondary'    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
