<template>
    <Breadcrumb class="layout-breadcrumb">
        <BreadcrumbItem v-for="(item,i) in breadcrumbItems" :key="i">
          {{item}}
        </BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
import siderConfig from "@/configs/siderConfig";
export default {
  name: "layout-breadcrumb",
  computed: {
    breadcrumbItems() {
      const arrItems = ["首页"];
      const path = this.$route.path.replace("/", "");
      const hash = this.$route.hash.replace("#", "");
      if (hash && siderConfig[hash - 1] && siderConfig[hash - 1]["title"]) {
        arrItems.push(siderConfig[hash - 1]["title"]);
        if (path && siderConfig[hash - 1]["item"]) {
          siderConfig[hash - 1]["item"].map(_val => {
            if (path == _val["pathName"]) {
              arrItems.push(_val["title"]);
            }
          });
        }
      }
      return arrItems;
    }
  }
};
</script>

<style lang="less" scoped>
.layout-breadcrumb {
  margin: 24px 0;
}
</style>


