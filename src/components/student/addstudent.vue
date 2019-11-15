<template>
  <div class="add-student">
    <div>添加学生：{{$store.getters.person}}</div>
    <div>
      姓名:
      <input type="text" v-model="name" />
    </div>
    <div>
      年龄:
      <input type="text" v-model="age" />
    </div>
    <button @click="handleclick">添加</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null
    };
  },
  methods: {
      handleclick(){
        const showlist = {
            name:this.name,
            age:this.age,
            id:+new Date()
        }
        this.$store.state.studentlist.push(showlist)
        console.log(showlist)
      }
  }
  
};
</script>


<style scoped>
div {
  margin: 10px 0;
}
</style>

