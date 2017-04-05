// Write a JavaScript function to flatten a nested array. For instance, flatten ([1, 2, 3, [4, 5, [6], [ ] ] ]) should return [1, 2, 3, 4, 5, 6] *
input = ([1, 2, 3, [4, 5, [6], [ ] ] ]);

function flatten(input) {
  output = [];
  function typeCheck(input) {
    input.map(function(e) {
      if (e.constructor === Array) {
        typeCheck(e);
        return;
      }
      output.push(e);
    })
  }
  typeCheck(input);
  return output;
}

console.log(flatten([4,5,['fo','foo',[4,5]]]));
