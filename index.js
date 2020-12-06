const VeeValidate = window.VeeValidate;
// フィールド監視
const ValidationProvider = VeeValidate.ValidationProvider;
// フォーム監視
const ValidationObserver = VeeValidate.ValidationObserver;
// バリデーションルール
const VeeValidateRules = window.VeeValidateRules;

const ja = {
  "code": "ja",
  "messages": {
    //"regex": "{_field_}のフォーマットが正しくありません",
    //"required": "{_field_}は必須項目です",
    "regex": "変換するデータのフォーマットが正しくありません。数値からカンマ(,)区切りの数値のみ入力してください。",
    "required": "変換するデータは必須項目です。",
  }
};

for(let key in ja.messages) {
  VeeValidate.extend(key, VeeValidateRules[key]);
}

VeeValidate.localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

var app = new Vue({
    el: '#app',
    data: {
      input_data_size: "",
      select_data_size : "b",
    },
    methods: {
      calc: function(){
        // 計算処理を実行する
        // select_data_sizeで選択されたデータサイズから各サイズへ変換し、その結果をテキストボックスに入力する。
      },
      clear: function(){
        this.input_data_size = ""
      }
    }
  })
