
# autoscale-text

  make text as big as possible in its parent element

  ```js
  var autoscale = require('autoscale-text');
  var el = document.querySelector('#el');
  
  window.addEventListener('resize', autoscale(el));
  ```
  
  check out the [demo](https://juliangruber.github.com/autoscale-text).

## Installation

    $ component install juliangruber/autoscale-text

## API

### autoscale(el[, max=0.66])

  Make the DOM node `el` as big as possible in its parent element, limited by
  factor `max`.
  
  This returns a function that basically calls itself again with the same
  arguments, so you can pass it to event listeners:
  
  ```js
  window.addEventListener('resize', autoscale(el));
  // scales now and on resize
  ```

## License

  MIT
