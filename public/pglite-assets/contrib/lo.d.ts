import { d as PGliteInterface } from '../pglite-BPiZge4p.js';

declare const lo: {
    name: string;
    setup: (_pg: PGliteInterface, _emscriptenOpts: any) => Promise<{
        bundlePath: URL;
    }>;
};

export { lo };
