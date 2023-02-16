
/* IMPORT */

import benchmark from 'benchloop';
import clone from '../dist/index.js';
import Fixtures from '../test/fixtures.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100_000
});

benchmark ({
  name: 'clone',
  fn: () => {
    clone ( Fixtures.object );
  }
});
