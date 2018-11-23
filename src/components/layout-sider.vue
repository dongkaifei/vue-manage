<template>
    <Menu :active-name="activeName" theme="light" width="auto" :open-names="[`${openNames}`]" :class="menuClass">
        <MenuItem name="" to='/'>
            <Icon type="md-desktop" />
            <span>首页看板</span>
        </MenuItem>
        <Submenu v-for="(item,i) in siderConfig" :key="i" :name="i+1+''">
            <template slot="title">
                <Icon :type="item['iconType']" />
                <span>{{item['title']}}</span>
            </template>
            <MenuItem v-for="(val,j) in item['item']" :key="j" :name="val['pathName']" :to="`/${val['pathName']}#${i+1}`">
                <span>{{val['title']}}</span>
            </MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
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
      return this.$route.hash.replace("#", "");
    },
    menuClass() {
      return "layout-sider-menu";
      //return "collapsed-menu";
    }
  }
};
</script>

<style lang="less" scoped>
.layout-sider-menu {
  text-align: left;
}
.collapsed-menu {
  text-align: left;
  span {
    display: none;
    width: 0px;
    transition: width 0.2s ease;
  }
  i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
}
</style>


