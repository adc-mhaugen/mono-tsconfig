import Component from '@glimmer/component';
import { getRandom } from '@add/one/utils';
import { inject as service } from '@ember/service';

import type { OneComponentSignature } from '@add/one/components/one';
import type TestService from '@adc/common/test';

interface TwoComponentSignature {
    Element: OneComponentSignature['Element'];
    Blocks: {
        default: [];
    };
}

export default class TwoComponent extends Component<TwoComponentSignature> {
    @service declare responsive: TestService;

    get random(): string {
        return String(getRandom());
    }
}
