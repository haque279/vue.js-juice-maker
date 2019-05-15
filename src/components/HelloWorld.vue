<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col s12 center-align">
          <img alt="Vue logo" src="../assets/logo.png">
          <h2>{{ msg }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>


<style scoped>
</style>
