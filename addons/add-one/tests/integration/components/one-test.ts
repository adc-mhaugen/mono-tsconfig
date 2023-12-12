import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { getRandom } from '@add/one/utils';

module('Integration | Component | one', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`
            <One @msg="test">
                <span>YIELD</span>
            </One>
        `);

        assert.dom('.add-one').hasAttribute('data-random');
        assert.dom('p').hasText('Component one "test"');
        assert.dom('span').hasText('YIELD');

        assert.true(getRandom());
    });
});
