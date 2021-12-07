<template>
  <div class="happy_learning">
    <div class="phuong_phap">
          <div class="slide-list">
            <div id="slides" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" class="active"></li>
                <li data-target="#slides" data-slide-to="1"></li>
                <li data-target="#slides" data-slide-to="2"></li>
              </ul>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="slide-images" src="../assets/happy_learning_1.jpg" alt="">
                </div>
                <div class="carousel-item">
                  <img class="slide-images" src="https://www.colorhexa.com/ff2442.png" alt="">
                </div>
                <div class="carousel-item">
                  <img class="slide-images" src="https://www.colorhexa.com/ffb830.png" alt="">
                </div>
              </div>
            </div>
            
            <div class="container padding">
              <p class="text-center" style="font-size: 20px;">HỌC VUI - HỌC HIỆU QUẢ</p>
              <div class="col-xs-12">
                <h3 class="text-center font-weight-bold" style="color: #039be5;">Nơi cập nhật những phương pháp học tập mới mẻ và hữu ích.</h3>
                <h4 class="text-center font-weight-bold" style="color: #ffa100;">Giúp bạn có hứng thú hơn với việc học và học hiệu quả hơn.</h4>
              </div>
              <div class="col-xs-12" style=" margin-top: 20px; background: #ff24414b; padding: 20px;">
                <h4 class="text-center">Có bao giờ bạn tự hỏi:</h4>
                <h4 class="text-center" style="font-style: italic;">"Tại sao mình học mãi mà chẳng tiến bộ?"</h4>
                <h4 class="text-center" style="font-style: italic;">"Tại sao mình không tìm ra thời gian để cân bằng giữa việc học và chơi?"</h4>
                <h5 class="text-center">Với những gì tổng hợp được, {{app_name}} hy vọng bạn sẽ tìm ra được những cách quản lí thời gian, những phương pháp học tập phù hợp với bản thân với những thông tin dưới đây nhé!</h5>
              </div>
            </div>
            <hr>

            <p class="text-center font-weight-bold" style="color: #039be5; font-size: 20px;">HỌC VUI - HỌC HIỆU QUẢ</p>
            <div class="container padding">
              <div class="row text-center padding">
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <h3 class="display-5">Quản lí thời gian</h3>
                  <img src="../assets/clock.png" alt="" style="width: 100px; height: 100px; margin: 20px 0;">
                  <ul class="list-unstyled">
                    <li><a target="_blank" href="https://thehanoichamomile.com/2019/10/03/quan-ly-cong-viec-va-thoi-gian-hieu-qua-voi-google-calendar-va-todoist/">Quản lí thời gian với Google Calendar & Todoist</a></li>
                    <li><a target="_blank" href="https://andrews.edu.vn/quy-tac-80-20-chia-khoa-vang-trong-quan-tri-nang-suat/">Quy luật 80/20 (Pareto Principle)</a></li>
                    <li><a target="_blank" href="https://happy.live/ly-thuyet-bon-lo-lua-cuoc-song-la-mot-chuoi-cac-lua-chon-khong-hoan-hao/">Thuyết bốn lò lửa (The four burners theory)</a></li>
                    <li><a target="_blank" href="https://andrews.edu.vn/quy-luat-parkinson-bi-quyet-vang-de-khong-bao-gio-bi-tre-deadline/">Luật Parkinson (Parkinson's Law)</a></li>
                    <li><a target="_blank" href="https://cafebiz.vn/ma-tran-eisenhower-phuong-phap-quan-ly-thoi-gian-hieu-qua-cua-vi-tong-thong-my-2017051818585352.chn">Ma trận Eisenhower (The Eisenhower Matrix)</a></li>
                    <li><a target="_blank" href="https://unica.vn/blog/5-loi-ich-khi-tao-danh-sach-viec-can-lam-hang-ngay">Sử dụng To-Do List lên kế hoạch</a></li>
                    <li><a target="_blank" href="https://blog.japan-itworks.vn/vi/quy-tac-40302010-phuong-phap-quan-ly-thoi-gian-khoa-hoc-nhat-876">Quy tắc 40/30/20/10</a></li>
                    <li><a target="_blank" href="https://uplift.vn/mo-hinh-4d-quan-ly-thoi-gian-gia-tang-hieu-qua-cong-viec">Mô hình 4D: Do – Dump – Delegate – Defer</a></li>
                  </ul>
                </div>
                <div class="col-sm-12 col-md-4">
                  <h3 class="display-5">Học tập không khó</h3>
                  <img src="../assets/knowledge.png" alt="" style="width: 100px; height: 100px; margin: 20px 0;">
                  <ul class="list-unstyled">
                    <li class="font-weight-bold" style="font-size: 20px;" >APPS SIÊU XỊN Ở GOOGLE PLAY</li>
                    <li>Focus to do – Pomodoro Timer & To Do List</li>
                    <li>Brain Focus Productivity Timer</li>
                    <li>Stay Focused</li>
                    <li>myHomework Student Planner</li>
                    <li>Khan Academy</li>
                    <li>Google Calendar</li>
                    <li>Google Keep</li>
                  </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <h3 class="display-5">Trăm môn nghìn cách học</h3>
                  <img src="../assets/school_board.png" alt="" style="width: 100px; height: 100px; margin: 20px 0;">
                  <ul class="list-unstyled">
                    <li><a target="_blank" href="https://trungthanh.net/pomodoro-la-gi/">Phương pháp quả cà chua - Pomodoro</a></li>
                    <li><a target="_blank" href="https://unica.vn/blog/mindmap-la-gi-lam-the-nao-ve-so-do-tu-duy">Sơ đồ tư duy (Mind-map)</a></li>
                    <li><a target="_blank" href="https://ghichu.vn/blog/ghi-chu-hieu-qua-theo-phuong-phap-the-cornell-notes/">Phương pháp ghi chú "The Cornell Notes"</a></li>
                    <li><a target="_blank" href="https://stepup.edu.vn/blog/flashcard-hoc-tu-vung-tieng-anh/">Ghi nhớ nhanh với Flashcards</a></li>
                    <li><a target="_blank" href="https://toppy.vn/blog/phuong-phap-spaced-repetition/">Kĩ thuật lặp lại ngắt quãng (Spaced Repetition)</a></li>
                    <li><a target="_blank" href="https://jobsgo.vn/blog/hoc-theo-dong-ho-sinh-hoc-tuong-khong-hieu-qua-ma-hieu-qua-khong-tuong/">Học theo khung giờ vàng</a></li>
                    <li><a target="_blank" href="http://sieutrinao.com/lam-the-nao-de-tap-trung-cao-do-khi-lam-viec-555/">Tập trung trong lúc học tập</a></li>
                    <li><a target="_blank" href="https://resources.base.vn/productivity/multitasking-cac-nha-khoa-hoc-da-chung-minh-duoc-dieu-gi-454">Đa nhiệm có tốt không?</a></li>
                    <li><a target="_blank" href="https://maas.vn/hack-ngay-5-phuong-phap-take-note-hieu-qua/">Ghi chép thông minh</a></li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div class="container padding">
              <div class="row text-center padding">
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <h3 class="display-5">Cùng nhau học ngoại ngữ</h3>
                  <img src="../assets/languages.webp" alt="" style="width: 100px; height: 100px; margin: 20px 0;">
                  <ul class="list-unstyled">
                    <li><a target="_blank" href="https://www.duolingo.com/">Duolingo: học tiếng Anh miễn phí</a></li>
                    <li><a target="_blank" href="https://www.thegioididong.com/tin-tuc/memrise-co-the-giup-ban-nho-hon-40-tu-trong-1-gio-722339">Memrise Easy Language Learning</a></li>
                    <li><a target="_blank" href="https://www.cambly.com/english?lang=en">English Tutors Online - Cambly</a></li>
                    <li><a target="_blank" href="https://bloganchoi.com/review-ung-dung-cake-hoc-tieng-anh-tren-may-tinh/">Cake: Học mẫu câu mỗi ngày</a></li>
                    <li><a target="_blank" href="https://chiasepremium.com/ung-dung-lingodeer-premium-plus">LingoDeer - Learn Languages</a></li>
                    <li><a target="_blank" href="https://matchstix.io/vi/cach-su-dung-ung-dung-mondly-de-hoc-tieng-anh-va-cac-ngon-ngu-khac-ngon-ngu/">Học tiếng Anh Mỹ – Mondly</a></li>
                    <li><a target="_blank" href="https://vi.wikipedia.org/wiki/Busuu">Busuu: Learn Languages</a></li>
                    <li><a target="_blank" href="https://quizlet.com/latest">Quizlet: Học tiếng và từ vựng</a></li>
                    <li><a target="_blank" href="https://www.lonelyplanet.com/">Lonely Planet</a></li>
                    <li><a target="_blank" href="https://conversationexchange.com/">Conversation Exchange</a></li>
                    <li><a target="_blank" href="https://www.fluentin3months.com/">Fluentin3months</a></li>
                  </ul>
                </div>
                <div class="col-sm-12 col-md-4">
                  <h3 class="display-5">Học tiếng Anh nào!</h3>
                  <img src="../assets/english.png" alt="" style="width: 140px; height: 100px; margin: 20px 0;">
                  <ul class="list-unstyled">
                    <li class="font-weight-bold" style="font-size: 20px;" >TỪ ĐIỂN ANH-ANH</li>
                    <li><a target="_blank" href="https://dictionary.cambridge.org/">Cambridge Dictionary</a></li>
                    <li><a target="_blank" href="https://www.ldoceonline.com/">Longman Dictionary of Contemporary English</a></li>
                    <li><a target="_blank" href="https://www.collinsdictionary.com/">Collins Online Dictionary</a></li>
                    <li><a target="_blank" href="https://www.thesaurus.com/">Thesaurus.com</a></li>
                    <li><a target="_blank" href="https://www.oxfordlearnersdictionaries.com/">Oxford Learner's Dictionaries</a></li>
                    <li><a target="_blank" href="https://www.macmillandictionary.com/">Macmillan Dictionary</a></li>

                    <li class="font-weight-bold" style="font-size: 20px;" >PHÁT TRIỂN 4 KỸ NĂNG</li>
                    <li><a target="_blank" href="https://www.ted.com/">TED - Ideas worth spreading</a></li>
                    <li><a target="_blank" href="https://www.udemy.com/">Udemy - Courses on Demand</a></li>
                    <li><a target="_blank" href="https://qz.com/">Quartz - Global business news and insights</a></li>
                    <li><a target="_blank" href="https://www.economist.com/">The Economist - World News, Politics, Business ...</a></li>
                  </ul>
                </div>
                <div class="col-sm-12 col-md-4">
                  <h3 class="display-5">Vui học tiếng Anh</h3>
                  <img src="../assets/game.webp" alt="" style="width: 100px; height: 100px; margin: 20px 0;">
                  <ul class="list-unstyled">                  
                    <li>Scrabble</li>
                    <li>Word Cookies!</li>

                    <li>Game Concentration</li>
                    <li>FastEnglish!</li>
                    <li>Crossword</li>
                    <li>Choices: Stories You Play</li>
                    <li>Game Flip Image</li>
                    <li>Words Crush: Hidden Themes</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'Happy_learning',
  props: {
    app_name: String
  }
}
</script>
