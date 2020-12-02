# Homepage

## About
Monorepo for homepage.

### Each packages
- main
  - homepage
- main-api
  - api server for homepage
- admin
  - data control screen
- api-for-admin
  - api server for admin

## Node version
Refer the node-version.

## Resolve dependencies
1. `$ yarn`
2. `$ yarn all-install`
3. `$ cd packages/main; yarn`
  - It has error of the next when until step2.

## Scripts of root
| scripts | description |
| --- | --- |
| all-install | install the libs on each packages |
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
