const mockdir = '<rootDir>/test';

module.exports = {

    // testEnvironment: 'node',

    testMatch: [
        '**/test/**/(*.)(spec|test).jsx',
    ],

    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${mockdir}/file.mock.js`,
        '\\.(css|less)$':                                                                      `${mockdir}/style.mock.js`,
    },

};
