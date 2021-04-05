<template>
  <div class="about">
    <h1>👇下面是一个微应用</h1>
    <div id="app"></div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    created() {
      Object.keys(window).forEach((ele) => {
        if (!window.__GLOBAL__.initialVariables.includes(ele)) {
          window.__GLOBAL__.baseVariables[ele] = window[ele]
          window[ele] = null
        }
      })
      console.log(window.__GLOBAL__)
      fetch('test')
        .then((res) => {
          let result = res.text()
          return result
        })
        .then((data) => {
          let parser = new DOMParser()
          let dom = parser.parseFromString(data, 'text/html')
          let scripts = dom.querySelectorAll('script')
          let origin = window.location.origin.replace(/\//g, '\\/')
          let reg = new RegExp(`(${origin})*(.*)`)
          scripts = Array.from(scripts).map((ele) => ({ src: ele.src.replace(reg, '$2'), defer: ele.defer }))
          scripts.forEach((ele, index) => {
            let script = document.createElement('script')
            script.src = ele.src
            script.defer = ele.defer
            script.tags = 'ssss'
            document.body.appendChild(script)
          })
          console.log(document.querySelectorAll('script'))
        })
    },
    destroyed() {
      Array.from(document.querySelectorAll('script')).forEach((ele) => {
        if (ele.tags === 'ssss') {
          console.log(ele)
          ele.remove()
        }
      })
      Object.keys(window).forEach((ele) => {
        if (!window.__GLOBAL__.initialVariables.includes(ele)) {
          window[ele] = null
        }
      })
      Object.keys(window.__GLOBAL__.baseVariables).forEach((ele) => {
        window[ele] = window.__GLOBAL__.baseVariables[ele]
      })
    },
  }
</script>
