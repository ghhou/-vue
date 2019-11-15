<template>
  <div class="personal">
    姓名:
    <input type="text" v-model="name" />
    <button class="btn" @click="handleclick">提交</button>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    if (this.name) {
      const flag = window.confirm("确定要离开吗");
      if (flag) {
        this.name = "",
         next();
      }
    } else {
      next();
    }
  },

  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleclick() {
      this.name = "";
    }
  }
};
</script>

<style scoped>
.btn {
  margin-left: 12px;
}
</style>