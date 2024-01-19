import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { AverageComponent } from './components/content/visuals/average/average.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {'path': 'home', 'title': 'Home', component:ContentComponent},
    {'path': 'average', 'title': 'Average', component:AverageComponent},

    {'path': '', redirectTo: '/home', pathMatch:'full'},
    {'path': '**', component:PagenotfoundComponent},
];
