import AT from '../../../constant/action-type';
import action from '../../../util/action';

export default (

    id => action(AT.toggleTodo, {
        id,
    })

);
