var inp = new Vue({
    el: '#inp',
    data: {
        message: ''
    }
})

var btn = new Vue({
    el: '#btn',
    methods: {
        add: function () {
            if(inp.message!=''){
                obj.todoList.push({work:inp.message,done:false});
                inp.message=''
            }
        }
    }
})

Vue.component('todo-item', {
    // Ở đây chúng ta khai báo cho component todo-item 
    // nhận một "prop" (có thể hiểu là một thuộc tính tùy biến) 
    // có tên là "todo".
    props: ['todo'],
    //template: '<li class="list-group-item">{{ todo }}</li>'
    template: '<button onclick="click()" type="button" class="list-group-item list-group-item-action">{{ todo }}</button>'
})

var obj = {
    todoList: []
}

var list = new Vue({
    el: '#list',
    data: obj
})

