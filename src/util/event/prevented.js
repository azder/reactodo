/** Created by azder on 2018-09-03. */

export default (

    fn => (

        ev => {
            ev.preventDefault();
            return fn(ev);
        }

    )

);

