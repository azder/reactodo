import AT from '../../../constant/action-type';
import action from '../../../util/action';


export default (

    filter => action(AT.switchVisibles, {
        filter,
    })

);



