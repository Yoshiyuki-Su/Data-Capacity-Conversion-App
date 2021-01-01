const VeeValidate = window.VeeValidate;
// フィールド監視
const ValidationProvider = VeeValidate.ValidationProvider;
// フォーム監視
const ValidationObserver = VeeValidate.ValidationObserver;
// バリデーションルール
const VeeValidateRules = window.VeeValidateRules;

// データサイズ
const kb = 1024
const mb = Math.pow(kb, 2)
const gb = Math.pow(kb, 3)
const tb = Math.pow(kb, 4)
const pb = Math.pow(kb, 5)
const eb = Math.pow(kb, 6)
const zb = Math.pow(kb, 7)
const yb = Math.pow(kb, 8)

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

var InputText = Vue.extend({
  props: ['data'],
  template: `
  <div class="container">
    <table>
      <tr>
        <td class="text-right"><ol>{{ data.size }}</ol></td>
        <td><ol>
            <input type="text" v-model="data.result_data"
            v-autowidth="{maxWidth: '300px', minWidth: '50px', comfortZone: 0}">{{ data.unit }}</ol>
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
      select_data_size : "Byte",
      select_data_digits: "10",
      results: [
        {
          size: "バイト",
          unit: "(B)",
          result_data: "",
        },
        {
          size: "キロバイト",
          unit: "(KB)",
          result_data: "",
        },
        {
          size: "メガバイト",
          unit: "(MB)",
          result_data: "",
        },
        {
          size: "ギガバイト",
          unit: "(GB)",
          result_data: "",
        },
        {
          size: "テラバイト",
          unit: "(TB)",
          result_data: "",
        },
        {
          size: "ペタバイド",
          unit: "(PB)",
          result_data: "",
        },
        {
          size: "エクサバイト",
          unit: "(EB)",
          result_data: "",
        },
        {
          size: "ゼタバイト",
          unit: "(ZB)",
          result_data: "",
        },
        {
          size: "ヨタバイト",
          unit: "(YB)",
          result_data: "",
        },
      ]
    },
    methods: {
      calc: function(){
        // TODO this.input_data_size 現状全てbyteで入ってきている それを選択値のサイズから処理するよう変更する

        // 入力値にカンマが含まれている場合は削除する
        var input_data = this.removeComma(this.input_data_size);

        // 計算し、結果を入力する
        this.results[0].result_data = this.byteFormat(input_data, 1, this.select_data_digits); // byte
        this.results[1].result_data = this.byteFormat(input_data, kb, this.select_data_digits); // KB
        this.results[2].result_data = this.byteFormat(input_data, mb, this.select_data_digits); // MB
        this.results[3].result_data = this.byteFormat(input_data, gb, this.select_data_digits); // GB
        this.results[4].result_data = this.byteFormat(input_data, tb, this.select_data_digits); // TB
        this.results[5].result_data = this.byteFormat(input_data, pb, this.select_data_digits); // PB
        this.results[6].result_data = this.byteFormat(input_data, eb, this.select_data_digits);  // EB
        this.results[7].result_data = this.byteFormat(input_data, zb, this.select_data_digits); // ZB
        this.results[8].result_data = this.byteFormat(input_data, yb, this.select_data_digits); // YB
      },
      clear: function(){
        this.input_data_size = ""
      },
      /**
      * 入力値にカンマが含まれていた場合は削除する
      * @param {String} input_data 入力値
      * @return {*}
      */
      removeComma: function(input_data){
        return parseInt(input_data.replace(/,/g, ''), 10);
      },
      /**
      * max digits桁 それに満たない場合は特に指数形式で表示しない
      * @param {number} size 変換元データ
      * @param {number} target データサイズ
      * @param {String} [digits = 10] 小数点以下第n位まで求めるか digits以上は指数表記
      * @return {*}
      */
      byteFormat: function(size, target, digits = 10) {
        if (String(size / target).length <= 10) {
          return (size / target);
        } else {
          return (size / target).toExponential(digits);
        }
      },
    }
  })
