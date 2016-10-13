/**
 * Created by db on 16/9/14.
 */

//new Vue({
//  el: '#test',
//  data: {
//    checkedNames: []
//  }
//})
//
//new Vue({
//  el: '#register',
//  data: {
//    username: '',
//    password:'',
//    email: ''
//  },
//  methods:{
//    submit: function(){
//      console.log('vue: ', this.username, this.password, this.email)
//    }
//  }
//})

var todo = new Vue({
  el: "#text",
  data:{
    todos:[{text:'aaa'}, {text: 'bbb'}, {text: 'ccc'}]
  },
  computed:{
    result: function(){
      return 4 * 4
    }
  },
  methods:{

  }
})

new Vue({
  el: '#app',
  data: {
    show: true,
    name:"yanssssssssss",
    friend:{
      name:"liuyuan",
      sex:'male',
      age:30
    }
  },
  methods:{
    change: function(){
      this.show = !this.show
    }
  }
})
new Vue({
  el:'#bpp',
  data:{
    show:true,

  },
  methods:{
    bb:function(){
      if (this.show===true){
        this.show=false
      } else {
        this.show=true
      }
    }
  }
})
