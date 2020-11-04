import { ref, watchEffect } from 'vue';
import * as todoStorage from '../util/todoStorage';

export default function usetodoList() {
    const todosRef = ref(todoStorage.fetch());
    watchEffect(() => {
        todoStorage.save(todosRef.value);
    });
    return {
        todosRef
    }
}