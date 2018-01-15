<template>
  <footer class="footer">
    <input
      type="text"
      placeholder="メモを入れてね"
      v-model="memo"
      class="footer__input"
    >
    <button
      @click="$emit('addMemo', memo)"
      class="footer__button"
    >登録する</button>
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
  padding: 15px 0;
  background-color: #525252;
  text-align: center;
  font-size: 0;
  &__input {
    min-width: 270px;
    height: 40px;
    border: 0;
    padding: 15px;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    vertical-align: middle;
  }
  &__button {
    display: inline-block;
    height: 40px;
    margin-left: 20px;
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    background-color: #35af4a;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    vertical-align: middle;
  }
}
</style>
