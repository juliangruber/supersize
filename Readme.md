# autoscale-text

  make text as big as possible in its parent element.

```js
var autoscale = require('autoscale-text');
var el = document.querySelector('#el');
  
window.addEventListener('resize', autoscale(el));
```
  
  check out the [demo](http://juliangruber.github.com/autoscale-text).

## Installation

    $ component install juliangruber/autoscale-text

## API

### autoscale(el[, max=0.66])

  Make the inner text of `el` as big as possible while `el` still stays in the
  bounds of its parent element.
  
  **!!** the element's parent needs to have `position:relative` or
  `position:absolute`. 
  
  The factor `max` limits the maximum possible size. If you want the text to
  take all available space, set `max` to `1`.
  
  This returns a function that calls `autoscale` again with the same
  arguments. This way you can execute it immediately and pass it as an event
  listener in one line:
  
```js
window.addEventListener('resize', autoscale(el));
// scales now and on resize
```

## License

  MIT
