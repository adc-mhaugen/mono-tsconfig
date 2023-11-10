import Controller from '@ember/controller';
import { getRandom } from '@add/one/utils';

export default class ApplicationController extends Controller {
    get random(): string {
        return String(getRandom());
    }
}
