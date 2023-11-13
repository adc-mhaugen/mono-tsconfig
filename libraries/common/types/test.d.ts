import type Service from '@ember/service';

declare module '@adc/common/test' {
    export default class TestService extends Service {
        foo: boolean;
    }
}
