<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    border-radius: 4px;
    background-color: transparent; /* or add it to the track */
  }
  /* Add a thumb */
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #eee;
  }
}
</style>
