import { ref, onMounted, onUnmounted, computed } from 'vue';
import { filterResult } from '../util/todoStorage';
export default function useFilter(todos) {
    const stateList = ['all', 'active', 'completed'];
    const filterState = ref('all');
    const onHashChange = () => {
        const hash = location.hash.replace(/#\/?/, '');
        if (stateList.includes(hash)) {
            filterState.value = hash;
        } else {
            location.hash = '';
            filterState.value = '';
        }
    }

    const filterList = computed(() => {
        return filterResult(todos.value, filterState.value);
    });

    const remainLength = computed(() => {
        return filterResult(todos.value, "active").length;
    });
    const completedLength = computed(() => {
        return filterResult(todos.value, "completed").length;
    })
    onMounted(() => {
        window.addEventListener("hashchange", onHashChange);
    });

    onUnmounted(() => {
        window.removeEventListener('hashchange', onHashChange);
    });

    return {
        filterState,
        filterList,
        remainLength,
        completedLength
    }
}