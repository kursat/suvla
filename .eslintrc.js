module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  "extends": [
    "standard",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect",
    },
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": false,
        "jsxBracketSameLine": true,
        "useTabs": true
      }
    ],
    "quotes": 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-var": 1,
    "semi": [
      1,
      "always"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-global-assign": "off",
    "no-unsafe-negation": "off",
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0,
    "jsx-quotes": 1,
    "no-constant-condition":0,
    "eqeqeq": 0,
    "react/display-name": [
      1,
      {
        "ignoreTranspilerName": false
      }
    ],
    "react/forbid-prop-types": [
      1,
      {
        "forbid": [
          "any"
        ]
      }
    ],
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-wrap-multilines": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 0,
    "react/no-set-state": 0,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "import/extensions": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "no-template-curly-in-string": 1,
    "node/no-deprecated-api": 0
  }
};
