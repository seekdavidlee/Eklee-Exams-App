#Initial Codegen Setup

The following documentation is used to generate the initial codegen.yml.

https://graphql-code-generator.com/docs/getting-started/

The following will create the necessary codegen.yml file.

```
gql-gen init
```

Note that on Windows, you may need to reference the following:

```
node_modules\.bin\gql-gen init
```

## Codegen

We will need to install the necessary dependencies if this is your first time.

```
npm install
```

We need to generate an updated schema. The file will be generated as schema.graphql. Use the following to generate an updated schema.

```
graphql get-schema
```

Then, we can run the following to create an updated types file, src/app/graphql.ts.

```
npm run codegen.yml
```

# EkleeExamsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
