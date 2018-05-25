import {
    Controller, Get, Render, Post, 
    Authenticated, Required, BodyParams,
    Delete,
    Service
} from '@tsed/common';
import { Query } from '../../helpers/query/query';
import { Observable } from 'rxjs';
import { ReadFile } from '../../helpers/read-file/read-file';
import { Omit } from '../../../node_modules/type-zoo';
import { ITeste, options } from 'src/entities/teste';


@Service()
export class TesteService {
    constructor (
        private _query: Query
    ) {

    }

    consultarTeste (
        cpf
    ): Observable<ITeste[]> {
        
        return this.
            _query
            .mySql()
            .set(ReadFile.read('queries/consultar-teste.sql', __dirname), 
            [
                cpf,
            ])
            .exec()
            .map(results => results.results);
    }
    
}