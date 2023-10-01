import { CLIResolvedOptions } from '@tamagui/types';
import { HMRListener } from './types';
export declare function createDevServer(options: CLIResolvedOptions, { indexJson, listenForHMR, getIndexBundle, hotUpdatedCJSFiles, }: {
    indexJson: Object;
    getIndexBundle: () => Promise<string>;
    listenForHMR: (cb: HMRListener) => void;
    hotUpdatedCJSFiles: Map<string, string>;
}): Promise<() => Promise<void>>;
/**
 * Represent Hot Module Replacement Update body.
 *
 * @internal
 */
export interface HMRMessageBody {
    name: string;
    time: number;
    hash: string;
    warnings: any;
    errors: any;
    modules: Record<string, string>;
}
/**
 * Represent Hot Module Replacement Update message.
 *
 * @internal
 */
export interface HMRMessage {
    action: 'building' | 'built' | 'sync';
    body: HMRMessageBody | null;
}
//# sourceMappingURL=createDevServer.d.ts.map