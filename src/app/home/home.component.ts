import { OfertasService } from '../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas();
    //console.log(this.ofertas)

    this.ofertasService.getOfertas()
      .then((ofertas: Array<Oferta>) => { //resolve
        this.ofertas = ofertas
      })
      .catch(( param: any ) => { //reject
        console.log(param)
      })

    //then: excecuta uma ação quando a promesa(Promise) estiver resolvida.
    //cath: excecuta uma ação quando a promesa(Promise) for rejeitada.

  }

}
