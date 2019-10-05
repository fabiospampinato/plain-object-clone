
/* IMPORT */

const {default: clone} = require ( '../dist' ),
      Fixtures = require ( '../test/fixtures' ),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'clone',
  fn: () => {
    clone ( Fixtures.object );
  }
});
