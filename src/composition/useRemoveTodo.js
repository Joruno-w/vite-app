export default function useRemoveTodo(todosRef) {
    const remove = (todo)=>{
        todosRef.value.splice(todosRef.value.indexOf(todo),1);
    }
    const removeAll = ()=>{
        todosRef.value = todosRef.value.filter(it=>!it.completed);
    }
    return {
        remove,
        removeAll
    }
} 