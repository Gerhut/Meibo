void (function () {
  const { ipcRenderer } = require('electron')

  setInterval((setTitle) => {
    let element
    element = document.querySelector('[data-action=msg] > i.num')
    if (element != null) return setTitle(element.innerText)
    element = document.querySelector('[data-newmsg]')
    if (element != null) return setTitle(element.dataset.newmsg)
    return setTitle()
  }, 1000, (title = '') => ipcRenderer.send('title', title))

  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('STYLE')
    style.innerHTML = [
      'body { -webkit-user-select: none; }',
      '.module-topbar { -webkit-app-region: drag; }',
      '.module-topbar > a { -webkit-app-region: no-drag; }'
    ].join('')
    document.head.appendChild(style)
  })

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      ipcRenderer.send('hide')
    }
  })
}())
