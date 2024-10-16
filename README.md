### Angular Coexisting Versions

## Setup Instructions

After cloning the repository, open two terminals and navigate to each app: `application-one` and `application-two`.

### Application One

```bash
npm install
npm start
```

### Application Two

```bash
npm install
npm run build
node_modules/.bin/http-server dist/application-two
```

Access the Application
Open http://localhost:4200 in your browser.

Behavior
You'll see the providers from app1 passed to app2 along with their values.

Console Result

```
Map(1) {'contentService' => _ContentService}
{data: 'content from application-one', asyncData: Observable2}
mock async data
```
