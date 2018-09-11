export default (
    fn => value => {
        fn && fn(value);
        return value;
    }
);
