void (function () {
  setInterval(function () {
    var element = document.querySelector('[data-action=msg] > i.num')
    var count = element == null ? '' : element.innerText
    require('electron').ipcRenderer.send('count', count)
  }, 1000)

  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.webkitUserSelect = 'none'
    document.body.style.webkitAppRegion = 'drag'
  })
}())
