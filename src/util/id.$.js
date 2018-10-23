/** Created by azder on 2018-10-23. */


import idgen from './idgen';


const id$ = idgen(0);


export default (

    () => id$.next().value

);
