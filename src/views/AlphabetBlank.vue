<template>
  <div class="blank-container">
    <div class="blank" :class="wordValue[0]">
      <input class="alphabet-slot" :class="isDisabled" @keydown.enter="onEnterKeyPressed" v-model="inputLetter[0]">
    </div>
    <div class="blank" :class="wordValue[1]">
      <input class="alphabet-slot" :class="isDisabled" @keydown.enter="onEnterKeyPressed" v-model="inputLetter[1]">
    </div>
    <div class="blank" :class="wordValue[2]">
      <input class="alphabet-slot" :class="isDisabled" @keydown.enter="onEnterKeyPressed" v-model="inputLetter[2]">
    </div>
    <div class="blank" :class="wordValue[3]">
      <input class="alphabet-slot" :class="isDisabled" @keydown.enter="onEnterKeyPressed" v-model="inputLetter[3]">
    </div>
    <div class="blank" :class="wordValue[4]">
      <input class="alphabet-slot" :class="isDisabled" @keydown.enter="onEnterKeyPressed" v-model="inputLetter[4]">
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
export default {
  props: ["evaluate",],
  emits: ["enter-pressed",], // emit의 사용법이 바뀜
  setup(props, {emit}) {
    const isEnterPressed = ref(false);
    const inputLetter = reactive(["", "", "", "", ""]);
    const inputWord = computed(() => {
      let word = "";
      inputLetter.map((char) => {
        word += char;
      })
      return word;
    })
    const wordValue = computed(() => {
      if(props.evaluate === undefined) return ["", "", "", "", ""];
      else return props.evaluate;
    })
    const isDisabled = computed(() => {
      if (isEnterPressed.value === false) return "";
      else return "disabled";
    })
    const onEnterKeyPressed = () => {
      if(inputWord.value.length === 5) {
        emit("enter-pressed", inputWord.value);
        isEnterPressed.value = true;
      }
    }

    return({
      inputLetter,
      inputWord,
      onEnterKeyPressed,
      wordValue,
      isEnterPressed,
      isDisabled,
    });
  },
}
</script>
<style lang="scss" scoped>

.blank-container {
  width: 300px;
  height: 60px;
  background-color: rgb(89, 89, 165);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .blank {
    height: 45px;
    width: 45px;
    border: 2px solid black;
    border-radius : 5px;
    .alphabet-slot {
      border: none;
      width: 30px;
      height: 30px;
      vertical-align: middle;
      font-size: 25px;
      background-color: rgb(89, 89, 165);
      &.disabled{
        opacity:0.5;
        filter:alpha(opacity=50);
        pointer-events:none;
      }
    }
    &.none {
      border: 2px solid red;
    }
    &.other {
      border: 2px solid yellow;
    }
    &.correct{
      border: 2px solid green;
    }
  }
}

</style>