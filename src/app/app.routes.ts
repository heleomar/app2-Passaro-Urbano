import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent }, //localhost:4200/''  quando url estiver vazia = HomeComponent
    { path: 'restaurantes', component: RestaurantesComponent }, //localhost:4200/restaurantes  = RestaurantesComponent
    { path: 'diversao', component: DiversaoComponent } //localhost:4200/diversao  = DiversaoComponent
] 
    
