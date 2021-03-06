import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent }, //localhost:4200/''  quando url estiver vazia = HomeComponent
    { path: 'restaurantes', component: RestaurantesComponent }, //localhost:4200/restaurantes  = RestaurantesComponent
    { path: 'diversao', component: DiversaoComponent }, //localhost:4200/diversao  = DiversaoComponent
    { path: 'oferta', component: HomeComponent}, 
    { path: 'oferta/:id', component: OfertaComponent, 
        children: [
            { path: '', component: ComoUsarComponent }, //criada rota filhas de oferta
            { path: 'como-usar', component: ComoUsarComponent }, //criada rota filhas de oferta
            { path: 'onde-fica', component: OndeFicaComponent }, //criada rota filhas de oferta
        ]
    }
    
] 
    
