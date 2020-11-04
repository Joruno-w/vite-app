const LOCAL_KEY = 'todomvc';

export function generateId(){
    return Math.random().toString(16).substr(2,4);
}

export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY);
    if (result) {
        return JSON.parse(localStorage.getItem(LOCAL_KEY));
    }
    return [];
}

export function save(todoList) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList));
}


export function filterResult(todoList,condition='all') {
    if(condition ===  'all'){
        return todoList;
    }else if(condition === 'active'){
        return todoList.filter(it=>!it.completed);
    }else if(condition === 'completed'){
        return todoList.filter(it=>it.completed);
    }
    throw new Error('you give condition has error');
}