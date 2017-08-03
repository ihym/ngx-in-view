# ngx-in-view [![npm version](https://badge.fury.io/js/ngx-in-view.svg)](https://www.npmjs.com/package/ngx-in-view) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

[![Build Status](https://travis-ci.org/ihym/ngx-in-view.svg?branch=master)](https://travis-ci.org/ihym/ngx-in-view)
[![Dependencies](https://david-dm.org/ihym/ngx-in-view.svg)](https://david-dm.org/ihym/ngx-in-view)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6ff9f19109dc4c9ba18eb8cd893d67d7)](https://www.codacy.com/app/ihym/ngx-in-view?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ihym/ngx-in-view&amp;utm_campaign=Badge_Grade)

Angular 2+ wrapper for [in-view.js](https://github.com/camwiegert/in-view)

[https://ihym.github.io/ngx-in-view/](https://ihym.github.io/ngx-in-view/)

## Installation

Install through `npm`:

```bash
npm install --save ngx-in-view
```


## API
### [inView]
#### Output

* enter: EventEmitter`<any>`: Emits whenever the element enters the viewport.
* exit: EventEmitter`<any>`: Emits whenever the element exits the viewport.
* enterOnce: EventEmitter`<any>`: Emits when the element enters the viewport for the first time.
* exitOnce: EventEmitter`<any>`: Emits when the element exits the viewport for the first time.

_**Note**: For every output, if not bound, no handler will be registered for the respective events._

##### Export (inView)
* is(): Check if element is in the viewport.


## Usage
Once installed you need to import our main module into your application module by calling InViewModule.forRoot(). You should end up with code similar to this:

```javascript
import {AppComponent} from '...';
import {InViewModule} from 'ngx-in-view/ngx-in-view';

@NgModule({
  imports: [..., InViewModule.forRoot()],
  declarations: [AppComponent, ...],
  bootstrap: [AppComponent],
})
export class AppModule {}
```


## Configuration

Optionally, you can pass an object to the forRoot method, to configure ngx-in-view during the initialization of the application, in order to provide your own default values. For example:

```javascript
@NgModule({
  imports: [
    ...,
    InViewModule.forRoot({
      threshold: 1, // Override this specific property
      ...
    })
  ],
})
export class AppModule {}
```

Currently available options can be found [here](https://github.com/ihym/ngx-in-view/blob/master/src/config/config.interface.ts).

If you want to change some config properties during runtime, you can easily achieve it by utilizing the update method like this:

```javascript
import {InViewConfig} from 'ngx-in-view/ngx-in-view';

export class AppComponent {

  constructor(private config: InViewConfig) {}

  changeConfig() {
    this.config.update({
      threshold: 0.5,
      ...,
    });
  }
}
```


## Contribute
### Build

```bash
npm run build
```

If you want to watch your source files for changes and build every time use:
```bash
npm start
```

**Note**: Generated output is placed into the `node_modules/ngx-card` folder.


### Demo

The best way to see your changes in action, is to use our demo page locally. Run:
```bash
npm run demo
```
which will create a development server accessible through `http:localhost:1111`.
In conjunction with `npm start` in another command tab you have a fully working environment!

All demo resources can be found in the `/demo` folder.

***
MIT @ [Vasilis Diakomanolis](https://github.com/ihym)
