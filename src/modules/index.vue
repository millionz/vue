<template>
  <div class="p-index">
    
  </div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex'

export default {
  data(){
    return{
    }
  },
  computed : {
    ...mapGetters([ 'userInfo' ]),
  },
  methods : {
    ...mapMutations([ 'updateUserInfo' ]),
  },
  components : {

  },
  watch : {

  },
  mounted(){

  },
  beforeRouteEnter( to , from , next ){
    next( vm => {
      // 通过vm访问组件实例
    })
  },
  beforeRouteLeave( to , from , next ){
    next();
  }
}
</script>
