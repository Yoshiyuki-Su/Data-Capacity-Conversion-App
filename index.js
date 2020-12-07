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


var InputText = Vue.extend({
  props: ['data'],
  template: `
  <div class="container">
    <table>
      <tr>
        <td class="text-right"><ol>{{ data.size }}</ol></td>
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
      select_data_size : "Byte",
      // result_data: "aa",
      select_data_digits: "10",
      results: [
        {
          size: "バイト",
          unit: "(B)",
          result_data: "aaaaa",
        },
        {
          size: "キロバイト",
          unit: "(KB)",
          result_data: "vvvvv",
        },
        {
          size: "メガバイト",
          unit: "(MB)",
          result_data: "vvvvv",
        },
        {
          size: "ギガバイト",
          unit: "(GB)",
          result_data: "vvvvv",
        },
        {
          size: "テラバイト",
          unit: "(TB)",
          result_data: "vvvvv",
        },
        {
          size: "ペタバイド",
          unit: "(PB)",
          result_data: "vvvvv",
        },
        {
          size: "エクサバイト",
          unit: "(EB)",
          result_data: "vvvvv",
        },
        {
          size: "ゼタバイト",
          unit: "(ZB)",
          result_data: "vvvvv",
        },
        {
          size: "ヨタバイト",
          unit: "(YB)",
          result_data: "vvvvv",
        },
      ]
    },
    methods: {
      calc: function(){
        // 計算処理を実行する
        // select_data_sizeで選択されたデータサイズから各サイズへ変換し、その結果をテキストボックスに入力する。
        
        // 入力値を取得
        this.input_data_size
        // 入力値の単位を取得
        this.select_data_size
        // 出力結果の桁数を取得
        this.select_data_digits

        // 下記を参考に計算結果をいれる
        // this.results[0].result_data = "abcdefg"
        // 9パターン


        // TODO まず下記を使うならカンマを変換してやらないといけない
        //使用例
        var fileSize = 123456789;

        var formatSize = this.byteFormat(fileSize, 3);
        console.log(formatSize);

      },
      clear: function(){
        this.input_data_size = ""
      },
      byteFormat: function(number, digits) {
        const k = 1024

        var bytes  = Number(number),
            suffix = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'ZB', 'YB'],
            target = Math.floor(Math.log(bytes) / Math.log(k)),
            unit   = suffix[target];
        
        console.log(target);
        console.log(unit);

        console.log(Math.pow(k, Math.floor(digits)))
        console.log((bytes / Math.pow(k, Math.floor(digits))).toFixed(digits) + ' ' + unit)
        console.log((bytes / Math.pow(k, Math.floor(digits))).toExponential(digits) + ' ' + unit)

        return parseFloat((bytes / Math.pow(k, target)).toFixed(digits)) + ' ' + suffix[target];
        //return (bytes / Math.pow(1024, Math.floor(digits))).toFixed(digits) + ' ' + unit;
        //return (bytes / Math.pow(1024, Math.floor(digits))).toExponential(digits) + ' ' + unit;
        
      },
    }
  })


