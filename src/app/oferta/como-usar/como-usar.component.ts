import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit(): void {    
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((resposta: string) => { 
      this.comoUsar = resposta
     })
  }

}
