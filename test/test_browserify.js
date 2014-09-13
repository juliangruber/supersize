var supersize = require('..');
var fns = [];

fns.push(supersize(document.querySelectorAll('p')[0]));
fns.push(supersize(document.querySelectorAll('p')[1]));
fns.push(supersize(document.querySelectorAll('p')[2]));

window.addEventListener('resize', function () {
  for (var i = 0; i < fns.length; i++) {
    fns[i]();
  }
});
