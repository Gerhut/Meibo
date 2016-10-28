void (function () {
  setInterval(function () {
    var element = document.querySelector('[data-action=msg] > i.num')
    var count = element == null ? '' : element.innerText
    require('electron').ipcRenderer.send('count', count)
  }, 1000)

  document.addEventListener('DOMContentLoaded', () => {
    var style = document.createElement('STYLE')
    style.innerHTML = [
      'body { -webkit-user-select: none; }',
      '.module-topbar { -webkit-app-region: drag; }',
      '.module-topbar > * { -webkit-app-region: no-drag; }'
    ].join('')
    document.head.appendChild(style)
  })
}())
