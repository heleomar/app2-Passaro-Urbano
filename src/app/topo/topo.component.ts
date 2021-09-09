import { Observable, Subject, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasServices: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // retorno Array Oferta
      //debounceTime executa a ação do switchMap após 1 segundo
      .pipe(debounceTime(1000), switchMap((termo: string) => {
        if (termo.trim() === '') {
          //precisa retornar um observable de Array oferta vazio
          return of(Array<Oferta>())
        }
        return this.ofertasServices.pesquisaOfertas(termo)
      }))

    this.ofertas.subscribe((ofertas: Array<Oferta>) => console.log(ofertas))

  }

  public pesquisa(termoDaBusca: string): void {

    console.log('keyup', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }

}
