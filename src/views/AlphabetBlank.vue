<template>
  <div class="blank-container">
    <div class="blank">a</div>
    <div class="blank">b</div>
    <div class="blank">c</div>
    <div class="blank">d</div>
    <div class="blank">e</div>
  </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>

.blank-container {
  width: 300px;
  height: 60px;
  background-color: blue;
  display: flex;
  
  .blank {
    height: 45px;
    width: 45px;
    border: 2px solid black;
  }
}

</style>