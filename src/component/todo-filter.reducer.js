import on from '../util/on-action';
import AT from '../constant/action-type';
import VIS from '../constant/visibility';


export default on(AT.switchVisibles, VIS.all, (state, data) => data.filter);
