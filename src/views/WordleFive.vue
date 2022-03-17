<template>
    <div class="wordle-container">
        <AlphabetBlank class="alphabet-blank" :evaluate="EvaluationList[0]" @enter-pressed="evaluateWord"/>
        <AlphabetBlank class="alphabet-blank" :evaluate="EvaluationList[1]" @enter-pressed="evaluateWord"/>
        <AlphabetBlank class="alphabet-blank" :evaluate="EvaluationList[2]" @enter-pressed="evaluateWord"/>
        <AlphabetBlank class="alphabet-blank" :evaluate="EvaluationList[3]" @enter-pressed="evaluateWord"/>
        <AlphabetBlank class="alphabet-blank" :evaluate="EvaluationList[4]" @enter-pressed="evaluateWord"/>
        <div class="failed" v-if="isUserRight === `no`">Oops...</div>
        <div class="success" v-if="isUserRight === `yes`">Congratulations!</div>
        <div class="answer-sheet" v-if="isUserRight !== 'undefined'">Answer: {{wordle.answer}}</div>
    </div>
</template>

<script>
// 컴포넌트, props을 제외한 모든 것들이 전부 setup 안에 들어감
import {reactive, ref} from 'vue'
import WordleManager from '../core/wordle-manager.js'
import AlphabetBlank from './AlphabetBlank.vue'
export default {
    components: {
        AlphabetBlank,
    },
    setup() {
        const isUserRight = ref("undefined");
        const status = ref(1);
        const wordle = reactive(new WordleManager());
        const EvaluationList = reactive([]);

        const evaluateWord = (word) => {
            status.value += 1;
            const result = wordle.checkResult(word);
            let correctNum = 0;
            EvaluationList.push(result);
            result.forEach(element => {
                if(element === 'correct') correctNum += 1; 
            });
            if(correctNum === 5) isUserRight.value = "yes";
            else{
                if(status.value > 5) {
                    isUserRight.value = "no";
                    return;
                }
            }
        }

        return {
            evaluateWord,
            status,
            EvaluationList,
            wordle,
            isUserRight,
        }
    },

}
</script>

<style lang="scss" scoped>

.wordle-container{
    .alphabet-blank{
        margin: 0 auto;
    }
}

</style>