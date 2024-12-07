new Zooming({
  bgColor: '#000',
  scaleExtra: 0,
  scaleBase: 0.8,
  enableGrab: false,
  customSize: '100%'
}).listen('.post__image > img');

/* Player */

var players = document.querySelectorAll('.player')

var loadPlayer = function (event) {
  var target = event.currentTarget
  var iframe = document.createElement('iframe')

  iframe.height = target.clientHeight
  iframe.width = target.clientWidth
  iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0'
  iframe.setAttribute('frameborder', 0)

  if (target.children.length) {
    target.replaceChild(iframe, target.firstElementChild)
  } else {
    target.appendChild(iframe)
  }
}

var config = {
  once: true
}

Array.from(players).forEach(function (player) {
  player.addEventListener('click', loadPlayer, config)
})

$('.player').on('click', function (evt) {
  $('.player > iframe').wrap('<div class="video"></div>');
});