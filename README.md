# ngx-in-view

[![Build Status](https://travis-ci.org/ihym/ngx-in-view.svg?branch=master)](https://travis-ci.org/ihym/ngx-in-view)
[![npm version](https://badge.fury.io/js/ngx-in-view.svg)](https://www.npmjs.com/package/ngx-in-view)

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

***
MIT @ [Vasilis Diakomanolis](https://github.com/ihym)
