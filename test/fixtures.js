
/* MAIN */

const Fixtures = {
  object: {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz',
    zero: 0,
    false: false,
    null: null,
    undefined: undefined,
    arr: [1, 2, 3],
    deep: {
      foo: 'deep.foo',
      bar: 'deep.bar',
      baz: 'deep.baz',
      zero: 0,
      false: false,
      null: null,
      undefined: undefined,
      arr: ['1', '2', '3'],
      deep: {
        deep: {
          level: 4
        }
      }
    }
  }
};

/* EXPORT */

export default Fixtures;
