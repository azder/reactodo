module.exports = {
    presets: [
        'env',
        'react',
        'stage-3',
    ],
    plugins: [
        'transform-class-properties',
        ["transform-runtime", {
            "polyfill":    true,
            "regenerator": true
        }]
    ]
};
