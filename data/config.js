// Letting jQuery now that there is no server around.
Object.defineProperties(location, {
  // Selector test for example use if statements with condition
  // `location.protocol != "file:"` to define some test that make no sense when
  // they run outside of `http:` or `https:` so we override `resource:` to get
  // desired evaluation of condition in those test.
  protocol: { value: "file:" }
});
// Letting jQuery now that there is no server around.
isLocal = true;
