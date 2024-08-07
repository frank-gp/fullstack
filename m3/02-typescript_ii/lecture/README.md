```bash

npm install typescript

tsc video2.ts

tsc --init

tsc

npx tsc index.ts
```

```json
// package.json
{
  "scripts": {
    "build":"tsc"
  },
}


// tsconfig.json
{
  "compilerOptions": {
     "noImplicitAny": true,
    "outDir": "./dist" /* convencion */
  },
  "files": ["index.ts"]
}
```
