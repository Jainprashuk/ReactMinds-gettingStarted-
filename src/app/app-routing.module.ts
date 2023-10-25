import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutreactComponent } from './mycomponents/aboutreact/aboutreact.component';
import { WhyreactComponent } from './mycomponents/whyreact/whyreact.component';
import { PrerequisitesComponent } from './mycomponents/prerequisites/prerequisites.component';
import { PlaygroundsComponent } from './mycomponents/playgrounds/playgrounds.component';

const routes: Routes = [
  { path: 'aboutreact', component: AboutreactComponent, outlet: 'secondary' },

  { path: 'whyreact', component: WhyreactComponent , outlet: 'secondary'    },
  { path: 'prerequisites', component: PrerequisitesComponent , outlet: 'secondary'    },
  { path: 'playgrounds', component: PlaygroundsComponent , outlet: 'secondary'    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
