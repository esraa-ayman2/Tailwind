import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:HomeComponent,
        title:'home',
        pathMatch: 'full'
    },
    {
        path:'about',
        title:'about',
        component:AboutComponent
    },
    {
        path:'portfolio',
        title:'portfolio',
        component:PorfolioComponent
    },
    {
        path:'contact',
        title:'contact',
        component:ContactComponent
    },
    {
        path:'not-found',
        title:'404',
        component:NotFoundComponent
    },
    {
        path:'**',
        redirectTo:'not-found'
        
    }
];