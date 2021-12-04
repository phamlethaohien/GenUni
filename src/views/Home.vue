<template>
  <div class="home">
    <div class="trang_chu">
      <div class="slide-list slide-list--active">
        <div class="slide-item">
          <!-- Introduction Slide -->
          <div id="slides" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#slides" data-slide-to="0" class="active"></li>
              <li data-target="#slides" data-slide-to="1"></li>
              <li data-target="#slides" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="slide-images"
                  src="https://lh3.googleusercontent.com/FYohEeEzq59WZg5tf_-4qNMxp3LQEhx3KYr0vdekHJHu78Pysx0tu2ZxCRcLgy_dIZUSGlGqfQYFW20GwRi1AXy8E7_AIcsRBxwENSRVr0hrZSqjfGKyHEYEMrXzrx-GXCcDWzXI_4tmTnGV4Jj2MZP65iPUEkcG7SF1A6OMZr7QqJ8m_7_YOXdjmmYDSzhhpBuBO_ANhLDIGn_V5U3CFd_aydMPVehSCWhC2eof1TR0IT6LUzk-D9H6HW9ogn7qqp4-m5t3hjS2yTTDfn_EMBHw_YN0qOaLQmcDIk33puZT61OBG6L0se61oGwNT8jJX2AuEiVc94b1Topn2pWEYoUp5xZXW5VSl4lZC2PTAzOjLKZw9StOCZqNB-OXr9FrhPd9SfFvSQjg5KJmV4ZLWvtccx3nSyy6ybxFW-qpfsgCmBet5gz_lGgmVyRvATeFvo9YyIIEL5StGGUIdGVyfCga_WyBgsTbLMYf-e-PptaKyufGdvRONEYU9oOr6OH27h0bXYBH2bN6tekbRoidharpkNhjZ2FAMckTHL3ReDY0wfk3patEn7oMQrA4qYoX1c6_DGqy_N8ooddzI2WqNKi2yImT4yx4_Yax9iqBJLoT2TVwuyeUTTaaQww6qMC28rlXaqm_dh5nMMz_yBdxW8-1MlXM98qHvHViK-Nyz3KFOSxajNhrlnuQPLJ6qQKvQxouxCt_cZEsDRnkTkXYjr0=w1210-h667-no?authuser=3"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  class="slide-images"
                  src="https://www.colorhexa.com/ff2442.png"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  class="slide-images"
                  src="https://www.colorhexa.com/ffb830.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <!-- Welcome Section -->
          <div class="container-fluid padding" data-aos="fade-up">
            <div class="row welcome text-center">
              <div class="col-12">
                <h1 class="display-4"></h1>
              </div>
              <div class="col-12">
                <h4>
                  Chào mừng bạn đến với {{ app_name }}, cùng khám phá những điều
                  thú vị ở {{ app_name }} nhé!
                </h4>
              </div>
              <hr />
            </div>
          </div>

          <!-- Statistics -->
          <div class="container padding">
            <div class="row text-center padding">
              <div
                class="col-xs-12 col-sm-6 col-md-4"
                style="background: #039ae57e; padding: 10px; border-radius: 3px"
                data-aos="fade-right"
              >
                <h3
                  class="display-4"
                  style="
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                      sans-serif;
                    color: #ffa100;
                  "
                >
                  20 - 11 - 2021
                </h3>
                <h2>Chính thức ra mắt {{ app_name }}</h2>
              </div>
              <div
                class="col-xs-12 col-sm-6 col-md-4"
                style="background: #ff244167; padding: 20px; border-radius: 3px"
                data-aos="zoom-in"
              >
                <h2 class="display-5">Một cộng đồng học tập</h2>
                <h4 class="display-4 font-weight-bold" style="color: #039be5">
                  lành mạnh
                </h4>
              </div>
              <div
                class="col-sm-12 col-md-4"
                style="background: #ffb73081; padding: 10px; border-radius: 3px"
                data-aos="fade-left"
              >
                <div style="font-size: 4.2rem; color: #ff2442">
                  <i class="fas fa-users"></i>
                </div>
                <div>
                  <h2>{{ access_time }} lượt truy cập</h2>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />

          <!-- Trang chủ -->
          <div class="container padding">
            <p class="text-center" style="font-size: 20px">TRANG CHỦ</p>
            <div class="row padding">
              <div class="col-lg-6">
                <h3>Nguồn cảm hứng tạo nên {{ app_name }}</h3>
                <p>
                  {{ app_name }} được tạo nên bởi những trải nghiệm thực tế của
                  cô bạn tuổi 14. Trong khi đại dịch Covid diễn biến như chưa có
                  điểm dừng, cô bạn này đã tham gia không ít đợt học online. Đôi
                  khi, cô bạn có những câu hỏi khó cần giải quyết nhưng việc hỏi
                  đáp thường gặp trở ngại. Sau một thời gian nghiên cứu và tiến
                  hành thực hiện, một không gian tương tác, kết nối lành mạnh
                  giữa thầy và trò đặc biệt xóa tan sự cản trở về khoảng cách
                  địa lý được ra đời.
                </p>
              </div>
              <div class="col-lg-6">
                <h3>Đồng hành cùng {{ app_name }}</h3>
                <p>
                  Tham gia {{ app_name }}, bạn sẽ có thể tìm kiếm sự giúp đỡ từ
                  những bạn bè khác mỗi khi bạn có những bài tập khó. Ngoài ra,
                  {{ app_name }} cũng đã tổng hợp được những phương pháp học
                  tập, những ứng dụng & websites, hy vọng phần nào đó hữu ích
                  đối với bạn. Cố lên nhé!
                </p>
                <button class="btn btn-primary">Tham gia ngay!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  props: {
    app_name: String,
    access_time: Number,
  },
};
</script>
