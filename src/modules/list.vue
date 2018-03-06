<template>
  <div class="p-list">

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
      
    })
  },
  beforeRouteLeave( to , from , next ){
    next();
  }
}
</script>
