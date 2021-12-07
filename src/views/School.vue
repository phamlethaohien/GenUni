<template>
  <div class="school">
    <div class="truong_hoc">
          <div class="slide-list">
            <div id="slides" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" class="active"></li>
                <li data-target="#slides" data-slide-to="1"></li>
                <li data-target="#slides" data-slide-to="2"></li>
              </ul>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="slide-images" src="https://www.colorhexa.com/3db2ff.png" alt="">
                </div>
                <div class="carousel-item">
                  <img class="slide-images" src="https://www.colorhexa.com/ff2442.png" alt="">
                </div>
                <div class="carousel-item">
                  <img class="slide-images" src="https://www.colorhexa.com/ffb830.png" alt="">
                </div>
              </div>
            </div>
            <div class="container-fluid padding">
              <h4 class="text-center font-weight-bold" style=" margin: auto; width: 800px; color: #039be5;">Cùng nhau giải quyết những khó khăn khi sử dụng các công cụ hỗ trợ dạy học trực tuyến như Google Meet, Zoom, Google Drive,...</h4>
              <div class="tools justify-content-center padding">
                <div class="_1tool">
                  <div class="text-center" @click="show('meet')">
                    <img src="../assets/meet.png" alt="">
                    <h4>Google Meet</h4>                      
                  </div>

                  <modal :width='1200' height='auto' :scrollable='true' name="modal-meet" style="z-index: 1200">
                    <div
                      @click="hide('meet')"
                      style="float: right; font-size: 50px; margin: 0 50px 50px 50px"
                    >
                      <i class="fas fa-times"></i>
                    </div>
                    <meet />
                  </modal>
                </div>                

                <div class="_1tool">
                  <div class="text-center">
                    <img src="../assets/zoom.png" alt="" style="width: 200px; height: 200px;">
                    <h4>Zoom</h4>
                  </div>

                  <div class="tool_toAppear" id="Zoom">

                  </div>
                </div>

                <div class="_1tool">
                  <div class="text-center">
                    <img src="../assets/drive.png" alt="" style="width: 200px; height: 200px;">
                    <h4>Google Drive</h4>
                  </div>                  
                </div>

                <div class="_1tool">
                  <div class="text-center">
                    <img src="../assets/quizziz.webp" alt="" style="width: 190px; height: 190px; border-radius: 3px;">
                    <h4>Quizizz</h4>
                  </div>

                  <div class="tool_toAppear" id="Zoom">

                  </div>
                </div>
              </div>  
                                    
            </div>

          </div>
        </div>

  </div>
</template>

<script>
import Meet from '../components/School/Meet.vue'

export default {
  name: 'School',
  components: {
    Meet
  },
  methods: {
    show (flatform) {
      this.$modal.show(`modal-${flatform}`);
    },
    hide (flatform) {
      this.$modal.hide(`modal-${flatform}`);
    }
  }
}

</script>
