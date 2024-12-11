/* hover */

if ($) $(function () {
  $('a').hover(
    function () {
      if (($(this).attr('href') != '') && ($(this).attr('href') != '#')) {
        $('a[href="' + $(this).attr('href') + '"]').addClass('hover')
      }
    },
    function () {
      $('a').removeClass('hover')
    }
  )
})

/* safari */

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()