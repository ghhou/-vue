<template>
  <div class="student-list">
    <div>学生列表：</div>
    <ul>
      <li 
      v-for="student in studentlist"
      :key="student.id">
      姓名：{{student.name}}
      年龄：{{student.age}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["studentlist"])
  }
};
</script>