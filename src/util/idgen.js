/** Created by azder on 2018-10-23. */


export default (

    function* idgen(init = 0) {
        while (true) {
            yield init;
            init += 1;
        }
    }

);
