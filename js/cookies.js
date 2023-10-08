function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}
let cookiecook = getCookie('cookiecook'),
  cookiewin = document.getElementsByClassName('cookie_notice')[0]
// check if we have coolies, if we have no cookies - showing the block
if (cookiecook != 'no') {
  // showing
  cookiewin.style.display = 'block'
  // close by click
  document
    .getElementById('cookie_close')
    .addEventListener('click', function () {
      cookiewin.style.display = 'none'
      // writing cookies for 365 days
      let date = new Date()
      date.setDate(date.getDate() + 365)
      document.cookie = 'cookiecook=no; path=/; expires=' + date.toUTCString()
    })
}
