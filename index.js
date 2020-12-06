var app = new Vue({
    el: '#app',
    data: {
      input_data_size: "",
      select_data_size : "b",
      error: {
        require: false,
        noNumber: false
      }
    },
    methods: {
      require(value){
        this.error.require = (value.length < 1) ? true : false;
      },
      validationCheck(value){
        require_result = this.require(value);

        // エラーの場合は他のチェックをする前に返す
        if (!require_result) return false

        // TODO チェック内容
        // ,区切りのデータも許容する予定
        // 数値以外は弾く
        
        
        return true
      },
        // input_size: function () {
        //   this.error.noNumber = ((this.input_size.length < 1) && (isFinite(this.input_size))) ? true : false;
        // }
      calc: function(){
        // まず値のチェックを実施する。
        result = this.validationCheck(this.input_data_size);

        if (require_result){
          // 計算処理を実行する
          // select_data_sizeで選択されたデータサイズから各サイズへ変換し、その結果をテキストボックスに入力する。

        }


        
      },
      clear: function(){
        this.input_data_size = ""
      }
    }
  })
  