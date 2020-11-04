import {ref} from 'vue';
import { generateId } from '../util/todoStorage';
export default function useNewtodo(todoRef){
    let newTodoRef = ref("");
    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim();
        if (!value) {
            return;   
        }
        const todo = {
            id: generateId(),
            title: value,
            completed: false
        }
        todoRef.value.push(todo);
        newTodoRef.value = '';
    }
    return{
        newTodoRef,
        addTodo
    }
}