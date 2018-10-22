import nil from './nil';
import curry from 'ramda/es/curry';

export default curry(

    (dfault, value) => nil(value) ? dfault : value

);

