
/* CLONE */

function clone ( object, base = object.constructor () ) {

  for ( const key in object ) {

    const value = object[key];

    if ( typeof value === 'object' && value !== null ) {

      base[key] = clone ( value, value.constructor () );

    } else {

      base[key] = value;

    }

  }

  return base;

}

/* EXPORT */

export default clone;
