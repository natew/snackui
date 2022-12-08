import { config } from '@tamagui/config-base';
import { InferTamaguiConfig } from '@tamagui/core';
export declare type Conf = InferTamaguiConfig<typeof config>;
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {
    }
}
//# sourceMappingURL=conf.d.ts.map