import Controller from '@ember/controller';
import { getRandom } from '@add/one/utils';
import { testLocal } from 'app-one/utils/foo';

export default class ApplicationController extends Controller {
    get random(): string {
        return String(getRandom());
    }

    get local(): ReturnType<typeof testLocal> {
        return testLocal();
    }
}
