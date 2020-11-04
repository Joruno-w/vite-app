import { ref, computed } from 'vue';
export default function useEditTodo(todosRef) {
    const editingTodoRef = ref(null);
    let originTitle = null;
    const editTodo = (todo) => {
        originTitle = todo.title;
        editingTodoRef.value = todo;
    }
    const doneTodo = (todo) => {
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if(title){
            todo.title = title;
        }else{
            todosRef.value.splice(todosRef.value.indexOf(todo),1);
        }
    }
    const cancelTodo = (todo) => {
        editingTodoRef.value = null;
        todo.title = originTitle;
    }
    const selectAllTodo = computed({
        get() {
            return todosRef.value.filter(it => !it.completed).length === 0;
        },
        set(checked) {
            todosRef.value.forEach(it => {
                it.completed = checked;
            })
        }
    })
    return {
        editingTodoRef,
        editTodo,
        doneTodo,
        cancelTodo,
        selectAllTodo,
    }

}