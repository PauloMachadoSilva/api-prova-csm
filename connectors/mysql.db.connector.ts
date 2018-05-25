import * as mysql from 'mysql';
import { ReadSecret } from '../src/helpers/read-secret/read-secret';

//Conector mysql
export const CONN = mysql.createPool({
    connectionLimit: 20,
    host: 'mysql762.umbler.com', //Host no Umbler
    port: 41890,
    user: 'usr_fideliu',
    password: 'usr_fideliu123',
    database: 'fideliu',
    connectTimeout: 15000,
    typeCast: true
});

