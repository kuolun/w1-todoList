new Vue({
  el: "#app",
  data: {
    id: 0,
    showAdd: false,
    showEditbox: false,
    star: false,
    todoname: "+add task",
    date: "",
    time: 0,
    file: "",
    comments: "",
    finished: false,
    todoList: []
  },
  methods: {
    // todoClass(idx) {
    //   console.log('todoClass:' + idx)
    //   return {
    //     delete: this.todoList[idx].finished
    //   }
    // },
    toogleAdd() {
      this.showAdd = !this.showAdd;
      this.todoname = "";
    },
    cancelAdd() {
      this.showAdd = !this.showAdd;
      this.todoname = "+add task";
    },
    addTodo() {
      this.todoList.push({
        id: this.id++,
        todoname: this.todoname,
        date: this.date,
        time: this.time,
        file: this.file,
        comments: this.comments,
        star: this.star,
        finished: this.finished,
        showEditbox: this.showEditbox
      });
      this.showAdd = false;
      this.todoname = "";
    },
    toggleEditbox(idx) {
      this.todoList[idx].showEditbox = !this.todoList[idx].showEditbox;
    },
    filter() {
      this.todoList = _.orderBy(
        this.todoList,
        ["star", "date"],
        ["desc", "desc"]
      );
    },
    updateTodo(idx) {
      console.log("update:" + idx);
      this.todoList[idx].todoname = this.todoname;
      this.todoList[idx].date = this.date;
      this.todoList[idx].time = this.time;
      this.todoList[idx].file = this.file;
      this.todoList[idx].comments = this.comments;
      this.todoList[idx].showEditbox = !this.todoList[idx].showEditbox;
    },
    deleToto(idx) {
      this.todoList.splice(idx, 1);
    },
    toggleStar(idx) {
      console.log(idx);
      // 先改star再filter
      this.todoList[idx].star = !this.todoList[idx].star;
      this.filter();
    }
  }
});
