<template>
  <div class="community">
  <add-student />
  <student-list />
  </div>
</template>

<script>
import AddStudent from'@/components/student/addstudent';
import StudentList from'@/components/student/studentlist';

export default {
  components:{
    AddStudent,
    StudentList
  }
}
</script>

