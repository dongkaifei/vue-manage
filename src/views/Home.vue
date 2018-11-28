<template>
  <div class="layout">
    <Layout>
      <layoutHeader/>
      <Layout>
        <Sider
          hide-trigger
          :class="siderClass"
          collapsible
          :collapsed-width="40"
          v-model="isCollapsed"
        >
          <layoutSider/>
        </Sider>
        <Layout class="layout-right">
          <layoutBreadcrumb/>
          <Content class="layout-content">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
      <layoutFooter v-if="false"/>
    </Layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
import layoutHeader from "@/components/layout-header";
import layoutBreadcrumb from "@/components/layout-breadcrumb";
import layoutSider from "@/components/layout-sider";
import layoutFooter from "@/components/layout-footer";
export default {
  name: "home",
  components: {
    layoutHeader,
    layoutBreadcrumb,
    layoutSider,
    layoutFooter
  },
  computed: {
    siderClass() {
      return ["layout-sider", { "layout-sider-scroll": !this.isCollapsed }];
    },
    ...mapState(["isCollapsed"])
  }
};
</script>

<style lang="less" scoped>
@import "../styles/common";
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .layout-sider {
    height: @sider-min-height;
    background: #fff;
  }
  .layout-sider-scroll {
    overflow-y: scroll;
  }
  .layout-right {
    padding: 0 24px 24px;
    .layout-content {
      padding: 24px;
      min-height: 280px;
      background: #fff;
    }
  }
}
</style>