<template>
  <div class="about">
    <h1 @click="showErr">This is an about page</h1>
  </div>
</template>

<script>
import { apiGetHomeworksInfo } from "@/api/homeworks";
export default {
  name: "about",
  created() {
    this.initData();
  },
  methods: {
    initData() {
      apiGetHomeworksInfo({ id: 1 }).then(() => {});
      // const url = `http://localhost:7001/homeworks/1`;
      // this.$http.get(url).then(res => {
      //   console.log(res);
      // });
    },
    showErr() {
      //this.$Message.error("This is an error tip");
    }
  }
};
</script>

