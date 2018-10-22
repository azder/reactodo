import curry from 'ramda/es/curry';
import curryN from 'ramda/es/curryN';

export default curry(
    // eslint-disable-next-line no-console
    (tag, n) => curryN(n, (...values) => console.log('~~~', tag, '~~>', ...values))
);
