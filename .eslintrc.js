module.exports = {
    "extends": [
        "eslint:recommended",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
        }
    },
    "globals": {
        "__DEV__": false,
        "APP_VERSION": true,
        "Promise": true,
    },
    "plugins": [
        "react",
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "paths": [
                    "src"
                ]
            }
        },
        "react": {
            "createClass": "createClass",
            "pragma": "React",
            "version": "16.2"
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "rules": {
        "indent": ["warn", 4, {"SwitchCase": 2}],
        "no-console": "off",
        "no-useless-escape": "off",
        "no-empty-pattern": "off",
        "no-unused-vars": ["warn", {"ignoreModules": true}],
        "no-case-declarations": "off",
        "quotes": ["warn", "single", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        "comma-dangle": ["warn", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "never",
            "functions": "ignore"
        }],

        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-array-index-key": "warn",
    }
};
