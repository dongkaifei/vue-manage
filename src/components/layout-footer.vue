<template>
  <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
</template>

<script>
export default {
  name: "layout-footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout-footer-center {
  text-align: center;
}
</style>
