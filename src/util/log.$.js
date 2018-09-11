export default (
    // eslint-disable-next-line no-console
    (...tags) => value => console.log('***', ...tags, ':=', value)
);
