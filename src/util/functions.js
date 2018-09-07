export const constant = (

    k => () => k

);


export const identity = (

    a => a

);

export const tap = (
    fn => value => {
        fn(value);
        return value;
    }
);
