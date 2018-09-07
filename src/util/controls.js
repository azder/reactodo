export const alternator = (

    mapping => (

        (defaultReducer, state, action) => (

            (mapping[action.type] || defaultReducer)(state, action)

        )

    )

);
