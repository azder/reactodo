export const ACTKEY = Object.freeze({
    ADD_TODO:              Symbol('ACTKEY.ADD_TODO'),
    TOGGLE_TODO:           Symbol('ACTKEY.TOGGLE_TODO'),
    SET_VISIBILITY_FILTER: Symbol('ACTKEY.SET_VISIBILITY_FILTER'),
});


export const VISIBILITY = {
    ALL:       Symbol('SHOW_ALL'),
    COMPLETED: Symbol('SHOW_COMPLETED'),
    ACTIVE:    Symbol('SHOW_ACTIVE'),
};
