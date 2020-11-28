var app = new Vue({
    el: '#app',
    data: {
      results: [],
      number: 0,
      text_data: "",
      select_data : "1",
      select_data2 : "1"
    },
    methods: {
      generateNumber() {
        this.number = Math.floor(Math.random() * 1001)
      },
      fizzbuzz() {
        this.generateNumber();
        this.results = [];
        const num = this.number;
        
        for (let step = 0; step <= num; step++) {
          if (step % 15 == 0) {
            this.results.push('FizzBuzz')
          } else if (step % 5 == 0) {
            this.results.push('Buzz')
          } else if (step % 3 == 0) {
            this.results.push('Fizz')
          } else {
            this.results.push(step)
          }
        }
      }
    }
  })
  