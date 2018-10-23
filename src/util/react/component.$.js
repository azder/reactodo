export default (

    (name, component, propTypes) => {

        component.propTypes = propTypes;
        component.displayName = name;

        return component;
    }

);
