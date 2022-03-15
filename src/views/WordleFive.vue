<template>
  <button @click="addCount">{{count}}</button>
  <AlphabetBlank />
</template>

<script>
// 컴포넌트, props을 제외한 모든 것들이 전부 setup 안에 들어감
import { ref, reactive, computed, onMounted } from 'vue'
import WordleManager from '../core/wordle-manager.js'
import AlphabetBlank from './AlphabetBlank.vue'
export default {
    components: {
        AlphabetBlank,
    },
    setup() {
        const count = ref(0);
        const reactiveA = reactive({});
        const computedB = computed(() => count.value + 1); // 템플릿에서 반응형으로 사용할 수 있음
        const wordle = new WordleManager();

        console.log(wordle.checkResult("abcde"));

        function addCount(){
            count.value += 1;
        }

        onMounted(() => {
            console.log(count.value);
            console.log(computedB.value);
        })
        return {
            count,
            reactiveA,
            computedB,
            addCount,
        }
    },

}
</script>

<style>

</style>