var _ = require('lodash');

export function recursiveMap (value, fn) {
    if (_.isArray(value)) {
      return value.map(v => recursiveMap(v, fn));
    } else if (typeof value === 'object') {
        return _.mapValues(value, function(v) {
            return recursiveMap(v, fn);
        });
    } else {
        return fn(value);
    }
};
