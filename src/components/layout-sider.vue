<template>
    <div>
      <Menu :active-name="activeName" theme="light" width="auto" :open-names="[`${openNames}`]" class="layout-sider-menu" v-if="!isCollapsed">
          <MenuItem name="" to='/'>
              <Icon type="md-desktop" />
              <span>首页看板</span>
          </MenuItem>
          <Submenu v-for="(config,i) in siderConfig" :key="i" :name="config.title">
              <template slot="title">
                  <Icon :type="config.iconType" />
                  <span>{{config.title}}</span>
              </template>
              <MenuItem v-for="(val,j) in config.item" :key="j" :name="val.pathName" :to="`/${val.pathName}`">
                  <span>{{val.title}}</span>
              </MenuItem>
          </Submenu>
      </Menu>
      <Menu theme="light" width="auto" class="collapsed-menu" v-else>
          
      </Menu>
    </div>
</template>

<script>
import { mapState } from "vuex";
import siderConfig from "@/configs/siderConfig";
export default {
  name: "layout-sider",
  data() {
    return {
      siderConfig
    };
  },
  computed: {
    activeName() {
      return this.$route.path.replace("/", "");
    },
    openNames() {
      let openNames = "";
      const activeName = this.$route.path.replace("/", "");
      siderConfig.map(config => {
        config.item.map(val => {
          if (val.pathName == activeName) {
            openNames = config.title;
          }
        });
      });
      return openNames;
    },
    ...mapState(["isCollapsed"])
  }
};
</script>

<style lang="less" scoped>
.layout-sider-menu {
  text-align: left;
}
.collapsed-menu {
  padding: 0;
  i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
}
</style>


