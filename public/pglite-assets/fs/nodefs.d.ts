import { E as EmscriptenBuiltinFilesystem, b as PGlite, c as PostgresMod } from '../pglite-BPiZge4p.js';

declare class NodeFS extends EmscriptenBuiltinFilesystem {
    protected rootDir: string;
    constructor(dataDir: string);
    init(pg: PGlite, opts: Partial<PostgresMod>): Promise<{
        emscriptenOpts: Partial<PostgresMod>;
    }>;
    closeFs(): Promise<void>;
}

export { NodeFS };
