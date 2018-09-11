export default (

    (tag, object) => new Proxy(object, {
        get: (...args) => {

            // eslint-disable-next-line no-unused-vars
            const [target, prop, receiver] = args;

            // eslint-disable-next-line no-console
            console.log(tag, `sniff().get(${prop})`, target, receiver);

            return Reflect.get(...args);

        },
    })

);
