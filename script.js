var obj = {
    todoList: [
        {
            work: "sleep",
            done: false,
            index: 0,
            edit:false
        },
        {
            work: "eat",
            done: false,
            index: 1,
            edit:false
        },
        {
            work: "code",
            done: false,
            index: 2,
            edit:false
        }
    ]
}

var vue=new Vue({
    el:'#vue',
    data:{
        text:'',
        todoList: obj.todoList
    },
    methods:{
        add: function () {
            if (this.$data.text != '') {
                obj.todoList.push({
                    work: this.$data.text,
                    done: false,
                    index: obj.todoList.length,
                    edit:false
                });
                this.$data.text = '';
            }
        },
        del: function(index) {
            obj.todoList.splice(index, 1);
            for (let i = index; i < obj.todoList.length; i++) {
                obj.todoList[i].index = i;
            }
        }
    }
})
/*
function check(index) {
    if (obj.todoList[index].done) {
        obj.todoList[index].done = false;
    } else {
        obj.todoList[index].done = true;
    }
}
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
            if (inp.message != '') {
                obj.todoList.push({
                    work: inp.message,
                    done: false,
                    index: obj.todoList.length,
                    edit:false
                });
                inp.message = '';
            }
        }
    }
})

Vue.component('todo-item', {
    // Ở đây chúng ta khai báo cho component todo-item 
    // nhận một "prop" (có thể hiểu là một thuộc tính tùy biến) 
    // có tên là "todo".
    props: ['todo', 'index', 'done'],
    template: '<li class="list-group-item d-flex bd-highlight mb-3" ><div class="p-2 bd-highlight"> <input v-on:click="done=!done;todo=(done?`<del>${todo}</del`:todo.substring(5, todo.length - 5));" type="checkbox" ></div><div class="p-2 bd-highlight"><p v-on:click="done=!done;todo=(done?`<del>${todo}</del`:todo.substring(5, todo.length - 5));" v-html="todo" ></p> </div><div class="ml-auto p-2 bd-highlight"><button class="btn btn-warning" v-on:click="update(index)" type="button">Update</button><button class="btn btn-dark" v-on:click="del(index)" type="button">Delete</button></div></li>'
    //template: '<li   class="list-group-item" ><p v-on:click="tick(index)" v-html="todo" style="float:left"></p> <button v-on:click="del(index)" style="float:right" type="button" class="close">Del</button></li>'
    //template: '<li v-on:click="tick(index)" class="list-group-item" v-html="todo"></li>'
    //template: '<button v-on:click="tick(todo)" type="button" class="list-group-item list-group-item-action">{{ todo }}</button>'
})



var list = new Vue({
    el: '#list',
    data: obj,
    methods:{
        del: function(index) {
            obj.todoList.splice(index, 1);
            for (let i = index; i < obj.todoList.length; i++) {
                obj.todoList[i].index = i;
            }
        }
    }
})
*/


/*function tick(index) {
    if (obj.todoList[index].done) {
        obj.todoList[index].work = obj.todoList[index].work.substring(5, obj.todoList[index].work.length - 6);
        obj.todoList[index].done = false;
    } else {
        obj.todoList[index].work = "<del>" + obj.todoList[index].work + "</del>";
        obj.todoList[index].done = true;
    }

}*/
