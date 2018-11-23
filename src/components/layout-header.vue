<template>
    <Header class="layout-header">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                
            </div>
        </Menu>
    </Header>
</template>

<script>
export default {
  name: "layout-header"
};
</script>

<style lang="less" scoped>
@import "../styles/common";
.layout-header {
  height: @header-hight;
  .layout-logo {
    width: 200px;
    height: 60px;
    background: url("../assets/logo.png");
    background-size: 100%;
  }
  .layout-nav {
    height: 60px;
  }
}
</style>


