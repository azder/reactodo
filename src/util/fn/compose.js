/** Created by azder on 2018-09-11. */

export default (

    (...fns) => (

        arg => (

            fns.reduceRight(
                (result, fn) => fn(result),
                arg
            )

        )
    )

);

