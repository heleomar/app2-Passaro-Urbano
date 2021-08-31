import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { URL_API } from './app.api'


@Injectable()
export class OfertasService {

   
    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Array<Oferta>> {

        return this.http.get(`${URL_API}?destaque=true`)
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

    public getOfertasPorCategoria(categoria: String): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then()
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
             // return resposta[0] // pega a primeira posição do Array!
                return resposta.shift() // shift pega a primeira posição do Array!
            })            
                             
           
        
    }


}