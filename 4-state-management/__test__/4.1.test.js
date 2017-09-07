require('../../util').createTestCase(__filename, (window, logs, done) => {
  console.log(window.document.getElementById('app').innerHTML)
  done()
})
