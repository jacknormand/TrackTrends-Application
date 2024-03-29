import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { AverageComponent } from './components/content/visuals/average/average.component';
import { TimeComponent } from'./components/content/visuals/time/time.component';
import { BestComponent } from './components/content/visuals/best/best.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {'path': 'home', 'title': 'Home', component:ContentComponent},
    {'path': 'average', 'title': 'Average', component:AverageComponent},
    {'path': 'time', 'title': 'Time', component:TimeComponent},
    {'path': 'best', 'title': 'Best', component:BestComponent},
    {'path': '', redirectTo: '/home', pathMatch:'full'},
    {'path': '**', component:PagenotfoundComponent},
];
