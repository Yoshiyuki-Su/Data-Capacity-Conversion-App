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

const VueInputAutowidth = window['VueInputAutowidth'];
Vue.use(VueInputAutowidth);

{/* <ol>バイト<input type="text" v-model="text_data1">(B)</ol>
<ol>キロバイト<input type="text" v-model="text_data2">(KB)</ol>
<ol>メガバイト<input type="text" v-model="text_data3">(MB)</ol>
<ol>ギガバイト<input type="text" v-model="text_data4">(GB)</ol>
<ol>テラバイト<input type="text" v-model="text_data5">(TB)</ol>
<ol>ペタバイド<input type="text" v-model="text_data6">(PB)</ol>
<ol>エクサバイト<input type="text" v-model="text_data7">(EB)</ol>
<ol>ゼタバイト<input type="text" v-model="text_data8">(ZB)</ol>
<ol>ヨタバイト<input type="text" v-model="text_data9">(YB)</ol> */}


var InputText = Vue.extend({
  props: ['data'],
  template: `
  <div class="container">
    <table>
      <tr>
        <td style="float: right;"><ol>{{ data.size }}</ol></td>
        <td><ol>
            <input type="text" v-model="data.result_data"
            v-autowidth="{maxWidth: '300px', minWidth: '10px', comfortZone: 0}">{{ data.unit }}</ol>
        </td>
      </tr>
    </table>
  </div>
`
})

//  コンポーネントを登録
Vue.component('data-size', InputText)

var app = new Vue({
    el: '#app',
    data: {
      input_data_size: "",
      select_data_size : "b",
      result_data: "aa",
      results: [
        {
          size: "size1",
          unit: "b",
          result_data: "aaaaa",
        },
        {
          size: "size2",
          unit: "kb",
          result_data: "vvvvv",
        },
      ]
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


