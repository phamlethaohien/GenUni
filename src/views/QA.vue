<template>
  <div class="qa">
    <div class="container">
      <h3 class="text-center" style="margin-top: 20px">
        Chào mừng bạn đến với không gian
      </h3>
      <img
        src="https://i.pinimg.com/originals/b8/9a/22/b89a22f1e76528ed333e962719167322.png"
        alt=""
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 180px;
          height: 200px;
        "
      />
      <h2 class="text-center">
        tại GenUni - nơi cùng nhau giải quyết mọi bài tập!
      </h2>
    </div>

    <div class="container" ref="start_page">
      <!-- Trả lời cho câu hỏi -->
      <!-- Chỗ này em có thể gộp chung thành 1 component Form -->
      <!-- Chỗ này em có thể tìm hiểu thêm model, ref trong vue để thay thế document.getElement -->
      <form @submit.prevent="addQuestion()" class="form-control mb-5">
        <div class="row mb-1">
          <div class="col-12">
            <input
              type="text"
              v-model="new_ques_user_name"
              class="input-effect-1"
              placeholder="Nhập tên của bạn"
            />
            <label></label>
            <span class="focus-border">
              <i></i>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mx-auto">
            <textarea
              v-model="new_ques_name"
              class="input-effect-2"
              placeholder="Nhập câu hỏi"
              rows="5"
            />
            <label></label>
            <span class="focus-border">
              <i></i>
            </span>
          </div>          
        </div>
        <div class="text-center">
          <input type="submit" value="Đặt câu hỏi" class="cbtn cbtn-primary" />
        </div>        
      </form>
    </div>

    <!-- <h1>This is list of question and answer</h1> -->
    <div class="container">
      <div class="row mb-2" v-for="(question, index) in questions" :key="question.id">
        <div class="col-md-12">
          <div class="form-control">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-12">
                    <h3 class="font-weight-bold mb-0">{{ question.user_name }}</h3>
                    <div>{{ question.at }}</div>
                  </div>
                  <div class="col-md-12">
                    <h4>{{ question.name }}</h4>
                  </div>
                </div>
                <hr>
                <div v-if="checkNotExistAnswer(question.id)" style="font-size: small">
                  Chưa có câu trả lời nào cho câu hỏi này
                </div>
                <div v-for="answer in answers" :key="answer.id" class="row">
                  <div v-if="answer.question_id === question.id" class="col-md-12">
                    <div class="row">
                      <div class="col-md-2">
                        <h5 class="text-right mb-0">{{ answer.user_name }}</h5>
                        <div class="text-right" style="font-size: small">{{ answer.at }}</div>
                      </div>
                      <div class="col-md-10">
                        <p class="rounded form-control" style="">{{ answer.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            Câu trả lời của bạn
            <div class="row mb-3">
              <!-- Trả lời cho câu hỏi -->
              <!-- Chỗ này em có thể gộp chung thành 1 component Form -->
              <!-- Chỗ này em có thể tìm hiểu thêm model, ref trong vue để thay thế document.getElement -->
              <input
                type="hidden"
                :class="`ans-question-id${index}`"
                :value="question.id"
              />
              <div class="col-lg-2 col-md-3 mb-1">
                <input
                  type="text"
                  class="input-effect-1"
                  :class="`ans-user-name${index}`"
                  placeholder="Tên của bạn"
                />
                <label></label>
                <span class="focus-border">
                  <i></i>
                </span>
              </div>
              <div class="col-lg-8 col-md-6 mb-1">
                <div 
                  class="textarea placeholder input-effect-3"
                  :class="`ans-name${index}`"
                  contenteditable="true"
                  @focus="checkFocusContentEmpty(index)"
                  @blur="checkBlurContentEmpty(index)"
                >
                  Câu trả lời
                </div>
                <label></label>
                <span class="focus-border">
                  <i></i>
                </span>
              </div>
              <div class="col-lg-2 col-md-3 mx-auto text-center">
                <button class="cbtn cbtn-success" @click.prevent="addAnswer(index)">Trả lời</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";

export default {
  name: "QA",
  components: {},
  data() {
    return {
      questions: [],
      answers: [],
      new_ques_user_name: "",
      new_ques_name: "",
    };
  },
  methods: {
    getQuestions() {
      db.collection("questions")
        .orderBy('at', 'desc')
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.questions.push({
              id: doc.id,
              name: doc.data().name,
              user_name: doc.data().user_name,
              at: doc.data().at.toDate().toLocaleDateString('vi-VN'),
            });
          });
        });
    },
    getAnswers() {
      db.collection("answers")
        .orderBy('at', 'desc')
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            this.answers.push({
              id: doc.id,
              name: doc.data().name,
              question_id: doc.data().question_id,
              user_name: doc.data().user_name,
              at: doc.data().at.toDate().toLocaleDateString('vi-VN'),
            });
          });
        });
    },
    addQuestion() {
      if (this.new_ques_name !== '' && this.new_ques_user_name !== '') {
        let newId = this.randomId();
        let newQuestion = {
          name: this.new_ques_name,
          user_name: this.new_ques_user_name,
          at: new Date(),
        };
  
        // Thêm mới data vào firebase
        db.collection("questions").doc(newId).set(newQuestion);
  
        newQuestion.id = newId;
        newQuestion.at = newQuestion.at.toLocaleDateString('vi-VN')
  
        this.questions.unshift(newQuestion); // Thêm câu hỏi vừa nhập vào dữ liệu và đẩy lên trước. Ví dụ: [4] -> unshift(7) sẽ dc [7,4]
        this.new_ques_name = ''
        this.new_ques_user_name = ''

        this.$refs.start_page.scrollIntoView({behavior: "smooth"});
      }
      else
        alert('Vui lòng nhập đầy đủ thông tin')
    },
    addAnswer(index) {
      let ans_name = document.getElementsByClassName(`ans-name${index}`)[0]
      let ans_user_name = document.getElementsByClassName(`ans-user-name${index}`)[0]
      if (ans_name !== '' && ans_user_name !== '') {
        let newAnswer = {
          name: ans_name.innerText,
          user_name: ans_user_name.value,
          question_id: document.getElementsByClassName(
            `ans-question-id${index}`
          )[0].value,
          at: new Date(),
        };

        // Thêm mới data vào firebase
        db.collection("answers").add(newAnswer);

        newAnswer.at = newAnswer.at.toLocaleDateString('vi-VN')

        this.answers.unshift(newAnswer); // Thêm câu trả lời vừa nhập vào dữ liệu và đẩy lên trước. Ví dụ: [4] -> unshift(7) sẽ dc [7,4]
        ans_name.innerText = 'Câu trả lời';
        ans_user_name.value = '';
      }
      else
        alert('Vui lòng nhập đầy đủ thông tin')
    },
    randomId() {
      return (Math.random() + 1).toString(36).substring(7);
    },
    checkNotExistAnswer(question_id) {
      for (let i=0; i<this.answers.length; i++){
        if(this.answers[i].question_id === question_id)
          return false
      }
      return true
    },
    checkFocusContentEmpty(index) {
      let input = document.getElementsByClassName(`ans-name${index}`)[0]
      if (input.innerText == 'Câu trả lời'){
        input.innerHTML = ''
        input.classList.remove('placeholder')
      }
    },
    checkBlurContentEmpty(index) {
      let input = document.getElementsByClassName(`ans-name${index}`)[0]
      if (input.innerText == ''){
        input.innerHTML = 'Câu trả lời'
        input.classList.add('placeholder')
      }
    }
  },
  created() {
    this.getQuestions();
    this.getAnswers();
  },
};
</script>

<style scoped>
  .form-control {
    background-color: rgba(0,0,0,0.1);
  }
  h2, h3, h4, h5, h6, p {
    word-break: break-all;
  }
  .textarea {
    width:100%;
    height:auto;
  }
  .placeholder {
    color: #757575;
  }
</style>
