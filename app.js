var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue'
  }
})

var app1 = new Vue({
  el: '#app1',
  data: {
    message: '页面加载于 ' + new Date()
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    seen: true
  }
})

var app3 = new Vue({
  el: '#app3',
  data: {
    todos: [
      { text: '学习 Javascript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})

var app4 = new Vue({
  el: '#app4',
  data: {
    message: 'hello Vue'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'hello Vue'
  }
})

Vue.component('todo-item', {
  template: '<li>这个是代办事项</li>'
})

var app6 = new Vue({
  el: '#app6'
})

Vue.component('todo-item-v', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app7',
  data: {
    list: [
      { text: '吃饭'},
      { text: '学习'},
      { text: '工作'}
    ]
  }
})

var app8 = new Vue({
  el: '#app8',
  data: {
    message: Math.random()
  }
})

var app9 = new Vue({
  el: '#app9',
  data: {
    counter: 0
  }
})

var app10 = new Vue({
  el: '#app10',
  data: {
    show: false
  },
  methods: {
    greet: function (state) {
      this.show = state
    }
  }
})
