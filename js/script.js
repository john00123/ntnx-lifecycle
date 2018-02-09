// let deckAvailable = cards.filter(card => card.state === 'available')
// .map(card =>
//   `<div class='card'>
//     <div class='card-header'>
//      <h5><input type='checkbox' class='select-tile'/> ${card.title} </h5>
//      <code> ${card.entities === 1 ?
//         card.entities + ` ` :
//         card.entities + ` `} </code>
//     </div>
//
//     <div class='card-body'>
//       <!-- <p>${card.state}</p> -->
//       <p>${ card.entities === 1 ?
//          card.entities + ` entity` :
//          card.entities + ` entities on ${card.clusterAffected} clusters`}
//       </p>
//       <h4>Updated ${card.updated}</h4>
//       <a class='edit-popup' href='#'> edit </a>
//     </div>
//   </div>`
// );


let deckUpdated = cards.filter(card => card.state !== 'available')
.map(card =>
  `<div class='card'>
    <div class='card-header'>
     <h5> ${card.title} </h5>
    </div>

    <div class='card-body'>
      <!--<p>${card.state}</p>-->
      <p>${card.entities} entities on ${card.clusterAffected} clusters </p>
      <h4>Updated ${card.updated}</h4>
      <a class='edit-popup' href='#'> edit </a>
    </div>
  </div>`
);


//buttons

let buttonGroup = buttons.map(button =>
  button.arrow == false ?
  `<button class= "${button.class} ${button.secondClass}">
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

function popupCreator(header, body, footer){

  $('body').after(popBase);
  $('.overlay').fadeIn();
  $('.popup').append(header, body, footer);
  $('.popup-header').click(()=>
    $('.overlay').fadeOut("slow",
      ()=> $('.overlay').remove()
    )
  );
}


//docready

$(document).ready(function() {
   $('.button-group').append(buttonGroup);
   $(`.section[data-type='available']`).append(deckAvailable);
   $(`.section[data-type='updated']`).append(deckUpdated);
   $('.card').click(checkCheck);
   $('.options-popup').click(()=>{
     popupCreator(header[0],body[0], footer[0]);
   });

   initialCheck();
   $('.edit-popup').click(()=>{
     popupCreator(header[1],body[1], footer[0]);
   });
});
