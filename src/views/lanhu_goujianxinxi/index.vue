<template>
  <div class="page flex-col">
    <div class="box_1 flex-col">
      <!--      <div class="section_1 flex-row">-->
      <!--        <span class="text_1">9:41</span>-->
      <!--        <img-->
      <!--          class="thumbnail_1"-->
      <!--          referrerpolicy="no-referrer"-->
      <!--          src="./assets/img/SketchPngc8d4307476e65412a1e3107391ae1f42e83511ff8d3a768a0f52d1020f7ba9ba.png"-->
      <!--        />-->
      <!--        <img-->
      <!--          class="thumbnail_2"-->
      <!--          referrerpolicy="no-referrer"-->
      <!--          src="./assets/img/SketchPngcd81db0fba50fce155f69568c8f0b431952b469be55b191fa53c57fd266a763c.png"-->
      <!--        />-->
      <!--        <img-->
      <!--          class="image_1"-->
      <!--          referrerpolicy="no-referrer"-->
      <!--          src="./assets/img/SketchPngbcef96b07f9de455e9ec438bd94a954b20dfa74bbc68a412343c90952f86db9e.png"-->
      <!--        />-->
      <!--      </div>-->
      <div class="section_2 flex-col">
        <div class="group_1 flex-col">
          <div class="text-wrapper_1 flex-col"><span class="text_2">基础信息</span></div>
          <div class="group_2 flex-col">
            <div class="text-wrapper_2 flex-row justify-between">
              <span class="text_3">名称：{{ data.name }}</span>
              <span class="text_4">编号：{{ data.number }}</span>
            </div>
            <img
                class="image_2"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng22c7872718ae95563af3b2aad2b303170910d210ab64eb746c2a73b64ac2e184.png"
            />
            <div class="text-wrapper_3 flex-row justify-between">
              <span class="text_5">标高：{{ data.height }}</span>
              <span class="text_6">位置：{{ data.position }}</span>
            </div>
            <img
                class="image_3"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng22c7872718ae95563af3b2aad2b303170910d210ab64eb746c2a73b64ac2e184.png"
            />
            <span class="text_7">规格：{{ data.spec }}</span>
            <img
                class="image_4"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng22c7872718ae95563af3b2aad2b303170910d210ab64eb746c2a73b64ac2e184.png"
            />
            <div class="text-wrapper_4 flex-row justify-between">
              <span class="text_8">长度：{{ data.length }}mm</span>
              <span class="text_9">重量：{{ data.weight }}KG</span>
            </div>
          </div>
        </div>
      </div>
      <div class="section_3 flex-col">
        <div class="section_4 flex-col">
          <div class="section_5 flex-row">
            <div class="text-wrapper_5 flex-col">
              <span class="text_10">单体：{{ data.room }}</span>
              <span class="text_11">区域：{{ data.area }}</span>
            </div>
            <div class="box_2 flex-col">
              <span class="text_12">项目：{{ data.project }}</span>
              <img
                  class="image_5"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng22c7872718ae95563af3b2aad2b303170910d210ab64eb746c2a73b64ac2e184.png"
              />
              <img
                  class="image_6"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng22c7872718ae95563af3b2aad2b303170910d210ab64eb746c2a73b64ac2e184.png"
              />
            </div>
          </div>
          <div class="section_6 flex-row">
            <div class="text-wrapper_6 flex-col"><span class="text_13">使用部位</span></div>
          </div>
        </div>
      </div>
      <div class="section_7 flex-col">
        <div class="box_3 flex-col">
          <div class="section_8 flex-row">
            <div class="text-wrapper_7 flex-col"><span class="text_14">生产企业</span></div>
          </div>
          <div class="section_9 flex-row">
            <div class="text-wrapper_8 flex-col">
              <span class="text_15">公司名称：山东金山钢构有限公司</span>
              <span class="text_16">公司地址：</span>
              <span class="text_17">业务电话：400-27774088</span>
            </div>
            <div class="block_1 flex-col">
              <span class="text_18">日照市经济开发区奎山街道上海路99号润峰集团院内</span>
              <img
                  class="image_7"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng22c7872718ae95563af3b2aad2b303170910d210ab64eb746c2a73b64ac2e184.png"
              />
              <img
                  class="image_8"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng22c7872718ae95563af3b2aad2b303170910d210ab64eb746c2a73b64ac2e184.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section_10 flex-col">
        <div class="box_4 flex-row">
          <div class="image-text_1 flex-col">
            <img
                class="label_1"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng5680459c24dcf7405d2a6cf276d6106034c6c3ba8c1d51edc543503aa281c362.png"
            />
            <span class="text-group_1">精诚所至，金石为开</span>
          </div>
        </div>
      </div>
      <div class="section_11 flex-col">
        <span class="text_19">{{ data.name }}{{ data.number }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {Base64} from 'js-base64';

export default {
  data() {
    return {
      data: {
        "name": "",
        "number": "",
        "height": "",
        "position": "",
        "spec": "",
        "length": "",
        "weight": "",
        "project": "",
        "room": "",
        "area": ""
      }
    }
  },
  mounted() {
    this.requestData();

  },
  created() {
    // 当前页面允许双指缩放
    document
        .querySelector('meta[name="viewport"]')
        .setAttribute('content', 'width=device-width, initial-scale=1');
    // 获取地址栏参数
    console.log(1);

  },
  beforeRouteLeave(to, from, next) {
    // 离开页面取消双指缩放
    document
        .querySelector('meta[name="viewport"]')
        .setAttribute(
            'content',
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        )
    next()
  },
  methods: {
    requestData() {
      console.log(this.data)
      let arr = location.href.split("obj=");
      console.log(arr);
      console.log(arr[1]);
      console.log(arr[1].length);
      // let r = "eyJuYW1lIjoi6ZKi5qKBIiwibnVtYmVyIjoiR0tMMi0xIiwiaGVpZ2h0IjoiKzE0LjM1IiwicG9zaXRpb24iOiIxLTMvQSIsInNwZWMiOiJISTY1MC0xMy0yMCozMDAiLCJsZW5ndGgiOiI4NDM4Iiwid2VpZ2h0IjoiMTU5NSIsInByb2plY3QiOiLml6XnhafkuK3ngY_lu7rnrZHoo4XppbDlt6XnqIvmnInpmZDlhazlj7giLCJyb29tIjoi5bGx5rW35aSpMSPovabpl7QiLCJhcmVhIjoi6ZKi5qKBIn0=";
      // let result = decodeURIComponent(escape(window.atob("eyJuYW1lIjoi6ZKi5qKBIiwibnVtYmVyIjoiR0tMMi0xIiwiaGVpZ2h0IjoiKzE0LjM1IiwicG9zaXRpb24iOiIxLTMvQSIsInNwZWMiOiJISTY1MC0xMy0yMCozMDAiLCJsZW5ndGgiOiI4NDM4Iiwid2VpZ2h0IjoiMTU5NSJ9")));
      // let result = decodeURIComponent(escape(window.atob(arr[1])));
      // let result = decodeURIComponent(escape(window.atob(arr[1])));
      let result  = Base64.decode(arr[1]);
      console.log(result);
      console.log(result.length)
      let finalResult = result.split("7");
      console.log(finalResult[0]);
      console.log(finalResult[1]);
      this.data = JSON.parse(finalResult[0]);
      console.log(this.data)
      console.log(this.data)
      let ss = "{\"name\":\"钢梁\",\"number\":\"GKL2-1\",\"height\":\"+14.35\",\"position\":\"1-3/A\",\"spec\":\"HI650-13-20*300\",\"length\":\"8438\",\"weight\":\"1595\",\"project\":\"日照中灏建筑装饰工程有限公司\",\"room\":\"山海天1#车间\",\"area\":\"钢梁\"}7";
      let strings = ss.split("7");

      console.log(strings[0]);
      console.log(strings[1]);
    }
  }
};
</script>
<style scoped lang="css" src="./assets/index.response2.css"/>
