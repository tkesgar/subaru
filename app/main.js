import Clipboard from 'clipboard'

// Lookup string
const aestheticFrom = ' !#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~¢£¬¯¦¥₩0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const aestheticTo = '　！＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～￠￡￢￣￤￥￦０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ'

const aestheticize = (str, spaces) => {
  let aesthetic = ''
  for (const ch of str) {
    let i = aestheticFrom.indexOf(ch)
    aesthetic += (i != -1 ? aestheticTo[i] : ch) + (spaces ? ' ' : '')
  }
  return aesthetic
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

const store = {
  text: '',
  spaces: false
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

const text = value => {
  store.text = value

  // Subscribe text events
  let inputNormal = document.getElementById('normal')
  inputNormal.value = value

  let inputFullwidth = document.getElementById('fullwidth')
  inputFullwidth.value = aestheticize(store.text, store.spaces)
}

const spaces = value => {
  store.spaces = value

  // Subscribe spaces events
  let inputSpaces = document.getElementById('spaces')
  inputSpaces.checked = value

  let inputFullwidth = document.getElementById('fullwidth')
  inputFullwidth.value = aestheticize(store.text, store.spaces)
}

// ---------------------------------------------------------------------------
// Dispatch input actions
// ---------------------------------------------------------------------------

let inputSpaces = document.getElementById('spaces')
inputSpaces.addEventListener('change', e => spaces(e.target.checked))

let inputNormal = document.getElementById('normal')
inputNormal.addEventListener('input', e => text(e.target.value))

// ---------------------------------------------------------------------------
// Clipboard global paste and copy
// ---------------------------------------------------------------------------

document.addEventListener('paste',
  e => text(e.clipboardData.getData('text'))
)

document.addEventListener('copy', e => {
  e.preventDefault()
  e.clipboardData.setData('text/plain', aestheticize(store.text, store.spaces))
})

// ---------------------------------------------------------------------------
// Clipboard copy string
// ---------------------------------------------------------------------------

new Clipboard(document.getElementById('copy'))

// ---------------------------------------------------------------------------
// Get text from address bar
// ---------------------------------------------------------------------------

text(decodeURIComponent(location.href.replace(location.origin + '/', '')))
