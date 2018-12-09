<template>
  <Header>
    <Menu mode="horizontal" theme="dark" class="layout-header">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Submenu name="3">
          <template slot="title">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
            <span class="user-name">admin</span>
          </template>
          <div class="menu-item">修改资料</div>
          <div class="menu-item">注销登录</div>
        </Submenu>
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
    .user-name {
      margin-left: 10px;
    }
    .menu-item {
      color: #000;
      &:hover {
        color: @theme-Primary-color;
      }
    }
  }
}
</style>


