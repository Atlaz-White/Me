let inc = 0;

const caritas = [
  ':D', 'UwU', ':0', ':v',
  ';)', ':3', '-.-*', ':p'
];

const el = document.querySelector( '#mod' );

setInterval( function () {

  el.textContent = caritas[ inc ];

  if ( inc != 7 ) inc++;
  else inc = 0;

}, 4000 );
