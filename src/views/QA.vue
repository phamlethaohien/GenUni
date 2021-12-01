<template>
  <div class="about">
    <h1>This is list of question and answer</h1>
    <ul v-for="(question, index) in questions" :key="question.id">
      <li>
        Người hỏi: {{question.user_name}} -> {{ question.name }}
        <ul v-for="answer in answers" :key="answer.id">
          <li v-if="answer.question_id === question.id">
            Người trả lời: {{answer.user_name}} -> {{answer.name}}
          </li>
        </ul>
      </li>

      <!-- Trả lời cho câu hỏi -->
      <!-- Chỗ này em có thể gộp chung thành 1 component Form -->
      <!-- Chỗ này em có thể tìm hiểu thêm model, ref trong vue để thay thế document.getElement -->
      <input type="text" :class="`ans-user-name${index}`" placeholder="Tên của bạn">
      <input type="text" :class="`ans-name${index}`" placeholder="Câu trả lời">
      <input type="hidden" :class="`ans-question-id${index}`" :value="question.id">
      <button @click.prevent="addAnswer(index)">Submit</button>

    </ul>

    <!-- Trả lời cho câu hỏi -->
    <!-- Chỗ này em có thể gộp chung thành 1 component Form -->
    <!-- Chỗ này em có thể tìm hiểu thêm model, ref trong vue để thay thế document.getElement -->
    <form @submit.prevent="addQuestion()">
			<input type="text" v-model="new_ques_user_name" placeholder="Tên của bạn">
			<input type="text" v-model="new_ques_name" placeholder="Câu hỏi của bạn">
			<input type="submit">
		</form>

  </div>
</template>

<script>
import db from '../firebase/init'

export default {
  name: 'QA',
  components: {
  },
  data() {
    return {
      questions: [],
      answers: [],
      new_ques_user_name: '',
      new_ques_name: ''
    };
  },
  methods: {
    getQuestions() {
      db.collection("questions")
        .get()
        .then(snap => {
          snap.forEach(doc => {
            this.questions.push(
              {
                id: doc.id,
                name: doc.data().name,
                user_name: doc.data().user_name
              }
            );
          })
        });
    },
    getAnswers() {
      db.collection("answers")
        .get()
        .then(snap => {
          snap.forEach(doc => {
            this.answers.push(
              {
                id: doc.id,
                name: doc.data().name,
                question_id: doc.data().question_id,
                user_name: doc.data().user_name
              }
            );
          })
        });
    },
    addQuestion() {
      let newQuestion = {
        name: this.new_ques_name,
        user_name: this.new_ques_user_name
      }

      // Thêm mới data vào firebase
      db.collection("questions").add(newQuestion)
      
      this.questions.unshift(newQuestion) // Thêm câu hỏi vừa nhập vào dữ liệu và đẩy lên trước. Ví dụ: [4] -> unshift(7) sẽ dc [7,4]
    },
    addAnswer(index) {
      let newAnswer = {
        name: document.getElementsByClassName(`ans-name${index}`)[0].value,
        user_name: document.getElementsByClassName(`ans-user-name${index}`)[0].value,
        question_id: document.getElementsByClassName(`ans-question-id${index}`)[0].value
      }

      // Thêm mới data vào firebase
      db.collection("answers").add(newAnswer)
      
      this.answers.unshift(newAnswer) // Thêm câu trả lời vừa nhập vào dữ liệu và đẩy lên trước. Ví dụ: [4] -> unshift(7) sẽ dc [7,4]
    }
  },
  created() {
    this.getQuestions();
    this.getAnswers();
  }
}
</script>
