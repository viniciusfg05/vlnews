module.exports = {
  testIgnorePartterns: ['/node_modules', '/.next', '/.history'],
  //pasta que eu quero ignorar nos test
  setapFileAfterEnv: [
    //array de arquivos que o jest execute antes de executar os tests
    '<rootDir>/src/tests/setupTests.ts'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    // <rootDir> simboliza a pasta root do projeto // todo arquivo que começa com qualquer caractere tendo um ou mais caracteres e que tenha . e as extensões...
  }
}
