
/* IMPORT */

import {describe} from 'fava';
import clone from '../dist/index.js';
import Fixtures from './fixtures.js';

/* MAIN */

describe ( 'clone', it => {

  it ( 'works', t => {

    t.deepEqual ( clone ( Fixtures.object ), Fixtures.object );

  });

});
