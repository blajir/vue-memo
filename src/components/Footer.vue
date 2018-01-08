<template>
  <footer class="footer">
    <input type="text" placeholder="メモを入れてね" v-model="memo">
    <button @click="$emit('addMemo', memo)">登録する</button>
  </footer>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      memo: '',
    }
  },
}
</script>


<style lang="scss" scoped>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
