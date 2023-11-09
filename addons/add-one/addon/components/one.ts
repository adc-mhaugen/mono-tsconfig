import Component from '@glimmer/component';
import { getRandom } from '../utils';

export interface OneComponentSignature {
    Element: HTMLDivElement;
    Args: {
        msg?: string;
    };
    Blocks: {
        default: [];
    };
}

export default class OneComponent extends Component<OneComponentSignature> {
    get msg(): string {
        const { msg } = this.args;
        return (msg && `"${msg}"`) ?? '';
    }

    get random(): string {
        return String(getRandom());
    }
}
