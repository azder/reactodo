/** Created by azder on 2018-09-03. */

export default (

    (handler, fn) => (
        ev => {
            fn(ev);
            return handler(ev);
        }
    )

);
