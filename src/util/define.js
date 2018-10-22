export default (

    (name, component, propTypes) => {
        const definition = {
            [name]: component,
        };
        definition[name].propTypes = propTypes;
        return definition[name];
    }

);
