# microfrontend-communication
Building a microfrontend project using single-spa, angular 7 (single-spa-angular) and adding a communication layer. (PoC)

## Get started
### Requirement
1. Node / npm
2. angular CLI

### Building micro-apps
1. `cd micro-apps`
2. `npm i`
3. `npm run build-all`

### Building single-spa app and serving
1. `cd ..`
2. `npm i`
3. `npm start`
4. `cd dist`
5. `npx light-server -s . --historyindex '/index.html' -o`

## Note
As of now no tests are implemented.

### Known issues
app2 imports BrowserAnimationsModule, and experiences a router bug where the components are appended rather than replaced.