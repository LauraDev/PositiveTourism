# PositiveTourism

BUILDING WEBSITE - PositiveTourism is a website that aims to promote positive tourism. It puts in contact, direct and free of charge, travellers and positive tours organisers.

- Front-End: Angular 7 - https://github.com/LauraDev/PositiveTourism
- Back-End: API Platform - https://github.com/LauraDev/PositiveTourism_api
- CSS Framework: Foundation

## Prerequisite

- Node: 8.12.0
- npm: 6.9.0

To install: `https://nodejs.org/`

- Angular CLI: 7.3.5

```
npm install -g @angular/cli
```

## Setup the project

```
cd <folder where to download the project>

git clone https://github.com/LauraDev/PositiveTourism.git

npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Tests

### Running unit tess

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Functionality

### Structure

This web application has 2 main modules:

  - Showcase : Contains the static part of the web app
    * home
    * about
    * 404
    * privacy policy

  - Tour : Contains the part related to the tours
    * list all tours
    * display the detail of a tour

The /core directory contains the global services.

The /ui directory contains all the components / directives / pipes that are not specific to the main modules and can be reused.

### How it works

#### Showcase

The showcase part is static.

#### Tour

The tour part displays data comming from a REST API ( https://github.com/LauraDev/PositiveTourism_api)

  - Services
    * TourService : collects tours data
    * ContactService : manipulates data coming from the contact form before sending it to the backend service

#### Backend Service

All POST and GET requests are emitted from this service. The request URL depends on the environment (dev - prod)

#### Storage Service

Once data are collected from the API, it is stored locally. Next time the tour list or tour detail page is called, only the tours that where created / modified since the last connection are collected.
