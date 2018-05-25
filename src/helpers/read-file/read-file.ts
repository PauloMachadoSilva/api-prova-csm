import * as fs from 'fs';
import { URL } from 'url';
import * as Path from 'path';

export class ReadFile {
    static read (filePath: string, dirName = __dirname): string {
        return fs.readFileSync(new URL(`file://${Path.resolve(dirName)}/${filePath}`), 'utf-8');
    }
}
