<!--
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-04-08 19:04:55
-->
<template>
  <div class="about" style="position: relative; width: 100%; height: 900px">
    <h1>👇下面是一个微应用</h1>
    <div id="app"></div>
  </div>
</template>
<script>
  import axios from 'axios'
  import importHtml from '@/utils/resourceParser'
  export default {
    async created() {
      Object.keys(window).forEach((ele) => {
        if (!window.__GLOBAL__.initialVariables.includes(ele)) {
          window.__GLOBAL__.baseVariables[ele] = window[ele]
          window[ele] = null
        }
      })
      let res = await importHtml('test', { origin: 'http://49.234.27.60' })
      console.log(res)
      // fetch("test")
      //   .then((res) => {
      //     return res.text();
      //   })
      //   .then((data) => {
      //     let parser = new DOMParser();
      //     let dom = parser.parseFromString(data, "text/html");
      //     let scripts = dom.querySelectorAll("script");
      //     let origin = window.location.origin.replace(/\//g, "\\/");
      //     let reg = new RegExp(`(${origin})*(.*)`);
      //     scripts = Array.from(scripts).map((ele) => ({
      //       src: ele.src.replace(reg, "$2"),
      //       defer: ele.defer,
      //     }));
      //     scripts.forEach((ele, index) => {
      //       let script = document.createElement("script");
      //       script.src = ele.src;
      //       script.defer = true;
      //       script.tags = "ssss";
      //       document.body.appendChild(script);
      //     });
      //   });
    },
    destroyed() {
      Array.from(document.querySelectorAll('script')).forEach((ele) => {
        if (ele.tags === 'ssss') {
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
