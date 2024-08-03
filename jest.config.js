module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '^.+\.vue$': 'vue-jest',
    '^.+\.js$': 'babel-jest'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ]
}

