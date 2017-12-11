let deckAvailable = cards.filter(card => card.state === 'available')
.map(card =>
  `<div class='card'>
    <div class='card-header'>
     <h5><input type='checkbox' class='select-tile'/> ${card.title} </h5>
     <code> ${card.entities === 1 ?
        card.entities + ` ` :
        card.entities + ` `} </code>
    </div>

    <div class='card-body'>
      <!-- <p>${card.state}</p> -->
      <p>${ card.entities === 1 ?
         card.entities + ` item` :
         card.entities + ` items`}
      </p>
      <h4>Updated ${card.updated}</h4>
      <a href='#'> details </a>
    </div>
  </div>`
);


let deckUpdated = cards.filter(card => card.state !== 'available')
.map(card =>
  `<div class='card'>
    <div class='card-header'>
     <h5> ${card.title} </h5>
    </div>

    <div class='card-body'>
      <!--<p>${card.state}</p>-->
      <p>${card.entities} items</p>
      <h4>Updated ${card.updated}</h4>
      <a href='#'>details </a>
    </div>
  </div>`
);


//buttons

let buttonGroup = buttons.map(button =>
  button.arrow == false ?
  `<button class= ${button.class} ${button.secondClass}>
    ${button.title}
  </button>`
  :
  `<div class =${button.secondClass}>
    <button class= ${button.class}>${button.title}</button>
    <button class='arrow'></button>
  </div>`
);


//checkbox

function checkCheck(){
  let checkbox =$(this).find(".card-header h5 input");
  let checked = checkbox.prop('checked') ? false : true;
  checkbox.prop('checked', checked);
  $('.selected-text').html($('input:checked').length !== 0 ? `/ ` +  $('input:checked').length + ` modules selected  ·  ${`<a class='clear'>clear</a>`}`: '');
  $('.card-body a').click(event => event.stopPropagation());
  $('.clear').click(clearCheck);
 };

function initialCheck(){
  $('.card-body a').click();
  $('.card:eq(0)').click();
}

function clearCheck(){
  $('.card').find(".card-header h5 input").prop('checked', false);
  $('.selected-text').html($('input:checked').length !== 0 ? `/ ` +  $('input:checked').length + ` modules selected ${`<a class='clear'>clear</a>`}`: '');
}

//filtering
// function filtering(){
//   let value = $('input').val();
//   $('input').keydown(function(){
//     $(`.section[data-type='available']`).html(deckUpdated);
//   });
// }


//docready

$(document).ready(function() {
   $('.button-group').append(buttonGroup);
   $(`.section[data-type='available']`).append(deckAvailable);
   $(`.section[data-type='updated']`).append(deckUpdated);
   $('.card').click(checkCheck);

   // filtering();
   initialCheck();
});
