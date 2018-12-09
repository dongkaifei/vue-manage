<template>
  <div class="admin-container">
    <h1>This is an admins page</h1>
    <button @click="getApi">click me</button>
  </div>
</template>

<script>
//import { addUser } from "@/api/admin";
export default {
  name: "admin",
  methods: {
    getApi() {
      // const username = "wangyi";
      // const password = "123";
      // addUser({ username, password }).then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>

<style lang="less" scoped>
</style>


