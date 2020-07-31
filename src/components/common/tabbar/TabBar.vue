<template>
  <div id="tab-bar-box">
    <div id="tab-bar">
      <slot></slot>
    </div>

  </div>
</template>

<script>

  export default {
    name: "TabBar",


  }
</script>

<style scoped>
  #tab-bar-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
  }

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0px -3px 1px rgba(100,100,100,0.2);
  }



</style>
