
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wtf-log', 'helper:wtf-log', {
  integration: true
});

/* eslint-disable no-console */
test('it logs props inside nicely formatted object', function(assert) {
  assert.expect(1);

  let originalLog = console.log;

  console.log = (props) => {
    let expectedProps = { foo: 'bar', hello: 'world' };
    assert.deepEqual(props, expectedProps, 'expected props are logged');
  };

  this.setProperties({
    foo: 'bar',
    hello: 'world'
  });

  this.render(hbs`{{wtf-log this "foo" "hello"}}`);

  console.log = originalLog;
});
/* eslint-enable no-console */
