module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '^api(.*)$': '<rootDir>/src/api$1',
    '^app(.*)$': '<rootDir>/src/spa/app$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^buttons(.*)$': '<rootDir>/src/spa/shared/buttons$1',
    '^cards(.*)$': '<rootDir>/src/spa/shared/cards$1',
    '^context(.*)$': '<rootDir>/src/context$1',
    '^fallbacks(.*)$': '<rootDir>/src/spa/shared/fallbacks$1',
    '^forms(.*)$': '<rootDir>/src/spa/shared/forms$1',
    '^framerMotion(.*)$': '<rootDir>/src/thirdParty/framerMotion$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^icons(.*)$': '<rootDir>/src/spa/shared/icons$1',
    '^inputs(.*)$': '<rootDir>/src/spa/shared/inputs$1',
    '^landing(.*)$': '<rootDir>/src/spa/landing$1',
    '^layout(.*)$': '<rootDir>/src/spa/app/layout$1',
    '^lotty(.*)$': '<rootDir>/src/thirdParty/lotty$1',
    '^mockData(.*)$': '<rootDir>/src/mockData$1',
    '^modals(.*)$': '<rootDir>/src/spa/shared/modals$1',
    '^navigation(.*)$': '<rootDir>/src/spa/app/layout/navigation$1',
    '^pages(.*)$': '<rootDir>/src/spa/app/pages$1',
    '^portal(.*)$': '<rootDir>/src/spa/shared/portal$1',
    '^profile(.*)$': '<rootDir>/src/spa/app/layout/profile$1',
    '^routing(.*)$': '<rootDir>/src/spa/app/routing$1',
    '^schema(.*)$': '<rootDir>/src/server/schema$1',
    '^server(.*)$': '<rootDir>/src/server$1',
    '^shared(.*)$': '<rootDir>/src/spa/shared$1',
    '^storybook(.*)$': '<rootDir>/src/thirdParty/storybook$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^tags(.*)$': '<rootDir>/src/spa/shared/tags$1',
    '^typography(.*)$': '<rootDir>/src/spa/shared/typography$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
