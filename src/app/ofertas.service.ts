import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { URL_API } from './app.api'


@Injectable()
export class OfertasService {

   
    constructor(private http: HttpClient) { }

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


    public getOfertas(): Promise<Array<Oferta>> {

        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise() //convertendo para Promise, pq ele é um observable!
            .then((resposta: any) => resposta)
    }
    

    public getOfertasPorCategoria(categoria: String): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then()
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
             // return resposta[0] // pega a primeira posição do Array!
                return resposta.shift() // shift pega a primeira posição do Array!
            })  
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {            
            return resposta[0].descricao
        })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {            
            return resposta[0].descricao
        })
    }


}