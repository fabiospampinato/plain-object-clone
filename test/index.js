
/* IMPORT */

import {describe} from 'ava-spec';
import {default as clone} from '../dist'
import Fixtures from './fixtures';

/* CLONE */

describe ( 'clone', it => {

  it ( 'works', t => {

    t.deepEqual ( clone ( Fixtures.object ), Fixtures.object );

  });

});
