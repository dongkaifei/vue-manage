<template>
  <div>
    <Menu
      :active-name="activeName"
      theme="light"
      width="auto"
      :open-names="[`${openNames}`]"
      class="layout-sider-menu"
      ref="menu"
      v-if="!isCollapsed"
    >
      <MenuItem name to="/">
        <Icon type="md-desktop"/>
        <span>首页看板</span>
      </MenuItem>
      <Submenu v-for="(config,i) in siderConfig" :key="i" :name="config.title">
        <template slot="title">
          <Icon :type="config.iconType"/>
          <span>{{config.title}}</span>
        </template>
        <MenuItem
          v-for="(val,j) in config.item"
          :key="j"
          :name="val.pathName"
          :to="`/${val.pathName}`"
        >
          <span>{{val.title}}</span>
        </MenuItem>
      </Submenu>
    </Menu>
    <Menu
      :active-name="activeName"
      theme="light"
      width="auto"
      class="collapsed-menu"
      ref="menu"
      v-else
    >
      <MenuItem name to="/" class="menu-item">
        <Icon type="md-desktop"/>
      </MenuItem>
      <Poptip
        placement="right-start"
        trigger="hover"
        :offset="10"
        padding="0"
        v-for="(config,i) in siderConfig"
        :key="i"
      >
        <div :class="['menu-item',{'menu-item-border': config.title === openNames}]">
          <Icon :type="config.iconType"/>
        </div>
        <div class="slot-content" slot="content">
          <MenuItem
            v-for="(val,j) in config.item"
            :key="j"
            :name="val.pathName"
            :to="`/${val.pathName}`"
          >
            <span>{{val.title}}</span>
          </MenuItem>
        </div>
      </Poptip>
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
      const activeName = this.$route.path.replace("/", "");
      return this.findOpenNames(activeName);
    },
    ...mapState(["isCollapsed"])
  },
  watch: {
    isCollapsed(val) {
      this.$nextTick(() => {
        this.$refs.menu.updateActiveName();
        if (!val) {
          this.$refs.menu.updateOpened();
        }
      });
    }
  },
  methods: {
    findOpenNames(activeName) {
      let openNames = "";
      siderConfig.map(config => {
        config.item.map(val => {
          if (val.pathName == activeName) {
            openNames = config.title;
          }
        });
      });
      return openNames;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/common";
.layout-sider-menu {
  text-align: left;
}
.collapsed-menu {
  .menu-item {
    display: inline-block;
    padding: 16px 0;
    width: 40px;
    text-align: left;
    cursor: pointer;
    &:hover {
      color: @theme-Primary-color;
    }
    i {
      transform: translateX(5px);
      transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
      vertical-align: middle;
      font-size: 22px;
    }
  }
  .menu-item-border {
    border-right: 2px solid @theme-Primary-color;
    color: @theme-Primary-color;
    background: #f0faff;
  }
  .slot-content {
    left: 0px;
  }
}
</style>


