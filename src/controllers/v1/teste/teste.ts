import { TesteService } from './../../../services/teste/teste.service';
import * as Express from 'express';
import {
    Controller, Get, Render, Post, 
    Authenticated, Required, BodyParams,
    Delete, Req, Res, QueryParams, PathParams
} from '@tsed/common';
import { Query } from '../../../helpers/query/query';
import { Observable, Subscription } from 'rxjs';

@Controller('/teste')
export class TesteController {
    constructor (
        private _query: Query,
        private _testeService: TesteService
    ) {

    }
    
    @Get('/consultar/:id')
    @Authenticated()
    async consultar (
        @Required() @PathParams('id') id: number,         
        @Req() request: Express.Request,
        @Res() response: Express.Response
    ): Promise<any> {
        return this
            ._testeService            
            .consultarTeste(id)
            .toPromise()
            .then(results => {
                response.json(results || []);
            });
    }
}
