module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    etupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    
    moduleNameMapper: {
        "^animate.css$": "<rootDir>/mocks/animate.css.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js", "\\.(css|less|scss|sass)$": "identity-obj-proxy" },
 
        transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
}