export default (

    (type, actual, handler) => (

        state => type === actual ? handler(state) : state

    )

);
