import { Observable } from 'rxjs';
import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from '@tsed/common';
import * as Path from 'path';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

@ServerSettings({
    rootDir: Path.resolve(__dirname),
    acceptMimes: ['application/json'],
    port: process.env['APP_PORT'] || 3000,
    mount: {
        '/v1': [
            '${rootDir}/controllers/v1/**/*.ts'
        ]
    }
})
export class Server extends ServerLoader {
    constructor () {
        super();
    }

    $onMountingMiddlewares (): void | Observable<any> {
        this
            .use(GlobalAcceptMimesMiddleware)
            .use(bodyParser.json())
            .use(cors({
                credentials: true,
                optionsSuccessStatus: 200,
                methods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH']
            }));

        return null;
    }

    public $onReady () {
        console.log('Server started...');
    }

    public $onServerInitError (err) {
        console.error(err);
    }
}

new Server().start();
