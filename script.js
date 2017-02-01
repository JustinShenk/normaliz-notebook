// Load Hilbert Basis lookup dictionary.

var hilbertBases = {};

$.getJSON('bases.json',function(data) {
  hilbertBases = data
  console.log('Hilbert bases loaded (test): ' + hilbertBases['[3, 3],[1, 6]'])
});