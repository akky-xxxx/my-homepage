# Homepage

## About
Monorepo for homepage.

## Required
Need to install below tools to global.
- node
- yarn
- lerna

## Node version
Refer the node-version or root package.json.

### Each packages
- main
  - homepage
- main-api
  - api server for homepage
- admin
  - data control screen
- admin-api
  - api server for admin
- shared-items
  - shared items of all packages

## Resolve dependencies
- `$ lerna bootstrap`

## How to install lib to root
- `$ yarn add lib -W`

## How to install lib to packages/*
- `$ lerna add lib --scope pacakges/package-name[ --scope pacakges/package-name]`

## How to remove lib
1. delete target lib from package.json
2. `$ lerna clean`
3. `$ lerna bootstrap`

## Scripts of root
| scripts | description |
| --- | --- |
| check-all | check code on each packages |
| doc | start documentations on each packages |
| fix | automatic fix of the root materials |

## Scripts of each packages
| scripts | description |
| --- | --- |
| check-all | check code |
| doc | start documentations packages |
| fix | automatic fix of the materials |
| dev | run by the development mode |
| start | run by the production mode |
