import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from "dotenv";
import * as path from "path"
import * as fs from "fs"

import { ConfigOptions } from './interfaces/config-options.interface';
import { EnvConfig } from './interfaces/envconfig.interface';
import { CONFIG_OPTIONS } from './constants';

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig;

    constructor(
        @Inject(CONFIG_OPTIONS) options: ConfigOptions
    ) {
        const filePath = `${process.env.NODE_ENV || 'development'}.env`;
        const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
        this.envConfig = dotenv.parse(fs.readFileSync(envFile))
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}
