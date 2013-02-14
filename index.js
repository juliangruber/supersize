var css = require('css');

module.exports = scale;

function scale (el, max) {
  max = max || 0.85;
  
  var parentRect = el.parentNode.getClientRects()[0];
  var rect = el.getClientRects()[0];
  var maxWidth = parentRect.width * max;
  var maxHeight = parentRect.height * max;
  var retriesLeft = 1000;
  
  var size = parseInt(el.style.fontSize, 10);
  if (isNaN(size)) size = 12;
  
  css(el, {
    position : 'absolute',
    left : '50%',
    top : '50%'
  })
  
  while(true) {
    if (!--retriesLeft) break;
    
    if (isInside()) {
      setSize(++size);     
      if (!isInside()) {
        setSize(--size);
        break;
      }
    } else {
      setSize(--size);
      if (isInside()) break;
    }
  }
  
  css(el, {
    marginTop : -0.5 * rect.height,
    marginLeft : -0.5 * rect.width
  });
    
  function setSize (size) {
    css(el, { fontSize : size + 'px', height : size });
    rect = el.getClientRects()[0];
  }
  
  function isInside () {
    return rect.width <= maxWidth && rect.height <= maxHeight;
  }
  
  return scale.bind(this, el, max)
}