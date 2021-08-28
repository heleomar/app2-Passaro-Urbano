import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'


@Injectable()
export class OfertasService {


    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Array<Oferta>> {

        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise() //convertendo para Promise, pq ele é um observable!
            .then((resposta: any) => resposta)
    }

    //metodo que retorna uma promesa 

    //public getOfertas2(): Promise<Array<Oferta>> {
    //    //algum tipo de processamento, que ao finalizar, chama a função resolve ou reject
    //    return new Promise((resolve, reject) => {
    //        if (Promise) {
    //            resolve(this.ofertas)
    //        } else {
    //            reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado!' })
    //        }
    //    });
    //}

    public getOfertasPorCategoria(categoria: String) : Promise<Array<Oferta>> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
        .then()
    }
}