import config from './config'
import { IConfig } from './lib/app/types';
export namespace APP_ENV {
    export const DEFAULT_CONFIG: IConfig = config;
    DEFAULT_CONFIG.id = 'andromeda';

    export const FEATURED_APPS = ['andromeda'];

    export const DATABASE: Record<string, string> = {
        'elgafar-1': 'stars1p8w6t6acg9zruu3j5c4qfsp9f96ujkmu33tezeg305qf8lcdhajsdan9ku',
        'messier-1': 'andr1tpp5zqrphcck25r0eudeuugt85ghwzjtfrqqj0szttv9x4j6qeuq55xqx5',
        'localwasm-1': 'wasm1ftsfd70k99qens0gqzp88c8yj4f2y9tedz2aq0gtuv8grqw93r5qtngvgp'
    }
}