// Write a JavaScript function to flatten a nested array. For instance, flatten ([1, 2, 3, [4, 5, [6], [ ] ] ]) should return [1, 2, 3, 4, 5, 6] *
input = ([1, 2, 3, [4, 5, [6], [ ] ] ]);

function flatten(input) {
  output = [];
  function nestCheck(input) {
    input.map(function(e) {
      if (e.constructor === Array) {
        nestCheck(e);
        return;
      }
      output.push(e);
    })
  }
  nestCheck(input);
  return output;
}

console.log(flatten(input));
