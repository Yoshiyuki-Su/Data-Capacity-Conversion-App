var app = new Vue({
    el: '#app',
    data: {
      results: [],
      number: 0,
      input_data_size: "",
      select_data_size : "b",
      //select_data2 : "1"
    },
    methods: {
      calc: function(){
        // まず値のチェックを実施する。
        // select_data_sizeで選択されたデータサイズから各サイズへ変換し、その結果をテキストボックスに入力する。
      },
      clear: function(){
        this.input_data_size = ""
      }
    }
  })
  