/** Created by azder on 2018-09-03. */

export const prevented = (

    fn => (

        ev => {
            ev.preventDefault();
            return fn(ev);
        }

    )

);


export const evtap = (

    (handler, fn) => (
        ev => {
            fn(ev);
            return handler(ev);
        }
    )

);
