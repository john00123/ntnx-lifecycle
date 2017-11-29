var header = {
  value:['One', 'Two', 'Three', 16],
  time:[ 2, 2, 2, 2]
};

header.value.map(x =>`<li>${x}</li>`);

$(document).ready(function() {
   $('body').append(table(value));
});
