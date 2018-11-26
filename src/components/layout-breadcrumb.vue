<template>
    <Breadcrumb class="layout-breadcrumb">
        <div class="collapsedIcon" @click="toggleCollapsed">
            <Icon :type="IconType" />
        </div>
        <BreadcrumbItem v-for="(item,i) in breadcrumbItems" :key="i">
          {{item}}
        </BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
import { mapState, mapActions } from "vuex";
import siderConfig from "@/configs/siderConfig";
export default {
  name: "layout-breadcrumb",
  computed: {
    breadcrumbItems() {
      const arrItems = ["首页"];
      const path = this.$route.path.replace("/", "");
      siderConfig.map(config => {
        config.item.map(val => {
          if (val.pathName == path) {
            arrItems.push(config.title, val.title);
          }
        });
      });
      return arrItems;
    },
    IconType() {
      return this.isCollapsed ? "md-list" : "md-menu";
    },
    ...mapState(["isCollapsed"])
  },
  methods: {
    ...mapActions(["toggleCollapsed"])
  }
};
</script>

<style lang="less" scoped>
.layout-breadcrumb {
  height: 60px;
  line-height: 60px;
  position: relative;
  .collapsedIcon {
    position: absolute;
    width: 100px;
    cursor: pointer;
    i {
      transform: translateX(5px);
      transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
      vertical-align: middle;
      font-size: 22px;
    }
  }
}
</style>


