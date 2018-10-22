import curry from 'ramda/es/curry';

export default curry(
    (fn, value) => {
        fn && fn(value);
        return value;
    }
);
