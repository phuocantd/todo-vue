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
                obj.todoList.push({
                    work:inp.message,
                    done:false,
                    index:obj.todoList.length
                });
                inp.message='';
            }
        }
    }
})

Vue.component('todo-item', {
    // Ở đây chúng ta khai báo cho component todo-item 
    // nhận một "prop" (có thể hiểu là một thuộc tính tùy biến) 
    // có tên là "todo".
    props: ['todo','index','done'],
    template: '<li v-on:click="tick(index)" class="list-group-item" v-html="todo"></li>'
    //template: '<button v-on:click="tick(todo)" type="button" class="list-group-item list-group-item-action">{{ todo }}</button>'
})

var obj = {
    todoList: []
}

var list = new Vue({
    el: '#list',
    data: obj
})

function tick(index){
    if (obj.todoList[index].done){
        obj.todoList[index].work=obj.todoList[index].work.substring(5,obj.todoList[index].work.length-6);
        obj.todoList[index].done=false;
    }else{
        obj.todoList[index].work="<del>"+obj.todoList[index].work+"</del>";
        obj.todoList[index].done=true;
    }

}