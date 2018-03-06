<template>
  <div class="m-components">
    这是一个组件Demo
    {{ msg }}
  </div>
</template>

<script>
export default {
  name : '组件Demo',
  data(){
    return {
      msg : 'Hello components'
    }
  }
}
</script>
