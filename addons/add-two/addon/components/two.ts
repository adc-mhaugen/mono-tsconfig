import Component from '@glimmer/component';
import { getRandom } from '@add/one/utils/random';

import type { OneComponentSignature } from '@add/one/components/one';

interface TwoComponentSignature {
    Element: OneComponentSignature['Element'];
    Blocks: {
        default: [];
    };
}

export default class TwoComponent extends Component<TwoComponentSignature> {
    get random(): string {
        return String(getRandom());
    }
}
