<template>
  <div id="app">
    <div id="nav">

      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top ">
        <div class="container">
          <a href="" class="navbar-brand">
            <img alt="Vue logo" src="./assets/logo.png" style="height: 60px; width: 60px;">
          </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <router-link class="nav-item" to="/">Home</router-link>
                <router-link class="nav-item" to="/qa">Góc trao đổi</router-link>
                <router-link class="nav-item" to="/happy_learning">Học vui - học hiệu quả</router-link>
                <router-link class="nav-item" to="/school">Trường học</router-link>
              </ul>
            </div>
            <!-- <a href="" class="navbar-nav non-register"> -->
              <!-- <button class="btn btn-primary btn-md">Đăng ký</button> -->
              <!-- <button class="btn btn-primary btn-md">Đăng nhập</button> -->
            <!-- </a> -->
        </div>
      </nav>
    </div>

    <router-view/>

    <footer>
        <div class="container">
          <div class="row padding">
            <div class="col-xs-12 col-sm-6 mt-5"> 
              <h3 class="text-uppercase font-weight-bolder" style="color: #FFB830;">{{app_name}}</h3>
              <p>{{app_name}} là một website đặc biệt dành riêng cho quý thầy cô và các bạn học sinh, nhằm giúp các thầy cô, các bạn học sinh tiếp thu công nghệ thông tin một cách nhanh chóng, giúp các bạn tìm ra một cách học phù hợp cho bản thân kết hợp những phương pháp học tập hiệu quả. Đặc biệt nhất là tính năng tương tác nhằm trao đổi và hỏi đáp. Từ đó tạo ra một cộng đồng học tập năng động, tích cực và hiệu quả.</p>
            </div>
            <div class="col-xs-12 col-sm-6 mt-5">
              <h3 class="text-uppercase font-weight-bolder" style="color: #FFB830;">Liên hệ</h3>
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/kei.2701" class="btn-floating btn-sm text-white" style="font-size: 24px;"><i class="fab fa-facebook-square"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.youtube.com/channel/UCBtDGHUAAH_NMyXpYqD3k2g" class="btn-floating btn-sm text-white" style="font-size: 24px;"><i class="fab fa-youtube"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/kei_2701/" class="btn-floating btn-sm text-white" style="font-size: 24px;"><i class="fab fa-instagram-square"></i></a>
                </li>
              </ul>
              <p class="font-weight-bolder">Email: <span class="font-weight-normal">thaohienvn2007@gmail.com</span></p>
              <p class="font-weight-bolder">Địa chỉ: <span class="font-weight-normal ">Gio Linh, Quảng Trị, Việt Nam</span></p>
            </div>
          </div>
          <div style="padding-bottom: 10px;">
            <p class="text-center font-weight-bold">Sản phẩm dự thi cuộc thi Khoa học Kĩ thuật 2021</p>
            <p class="text-center font-weight-bold">Đơn vị: Trường Tiểu học và Trung học Cơ sở Gio Hải số 2</p>
          </div>
        </div>
      </footer>

  </div>
</template>

<script>
  export default {
  name: 'App',
  data() {
    return {
      app_name: 'GenUni'
    } 
  }
  
}
</script>
