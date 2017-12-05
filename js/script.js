
let map1 = cards.map(card =>
  `<div class='card'>
    <h5>${card.title}</h5>
    <p>${card.state}</p>
  </div>`
);

$(document).ready(function() {
   $(`.section[data-type='available']`).append(map1);
});
