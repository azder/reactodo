import curry from 'ramda/es/curry';

export default curry(
    // eslint-disable-next-line no-console
    (tag, value) => console.log('~~~', tag, '~~>', value)
);
