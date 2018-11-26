<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1" class="layout-header">
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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


