let inc = 0;

const caritas = [
  ':D', 'UwU', ':0', ':v',
  ';)', ':3', '-.-*', ':p'
];

setInterval( function () {

  const el = document.querySelector( '#mod' );

  el.textContent = caritas.at( inc );

  if ( inc != 7 ) inc++;
  else inc = 0;

}, 4000 );
