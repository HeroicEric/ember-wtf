import Ember from 'ember';

/* eslint-disable no-console */
export function wtfLog([context, ...props]) {
  console.log(context.getProperties(...props));
}
/* eslint-enable no-console */

export default Ember.Helper.helper(wtfLog);
