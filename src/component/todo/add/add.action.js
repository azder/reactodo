import AT from '../../../constant/action-type';
import action from '../../../util/action';

export default (

    (id, text) => action(AT.addTodo, {id, text})

);

