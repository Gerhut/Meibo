void (function () {
  setInterval(function () {
    var element = document.querySelector('[data-action=msg] > i.num')
    var count = element == null ? '' : element.innerText
    require('electron').ipcRenderer.send('count', count)
  }, 1000)

  /*
    Make body draggable
    http://electron.atom.io/docs/api/frameless-window/#draggable-region
  */
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.webkitAppRegion = 'drag'
  })
}())
