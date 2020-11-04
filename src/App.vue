<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todosRef.length > 0">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          v-model="selectAllTodo"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            :class="{
              completed: item.completed,
              editing: editingTodoRef === item,
            }"
            v-for="item in filterList"
            :key="item.id"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" />
              <label @dblclick="editTodo(item)">{{ item.title }}</label>
              <button class="destroy" @click="remove(item)"></button>
            </div>
            <input
              v-model="item.title"
              class="edit"
              type="text"
              @blur="doneTodo"
              @keydown.enter="doneTodo"
              @keydown.esc="cancelTodo(item)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todosRef.length > 0">
        <span class="todo-count">
          <strong>{{ remainLength }}</strong>
          <span>item{{ remainLength > 1 ? "s" : "" }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: filterState === 'all' }">All</a>
          </li>
          <li>
            <a href="#/active" :class="{ selected: filterState === 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: filterState === 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button class="clear-completed" v-show="completedLength" @click="removeAll">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useNewtodo from "./composition/useNewtodo";
import usetodoList from "./composition/usetodoList";
import useFilter from "./composition/useFilter";
import useEditTodo from "./composition/useEditTodo";
import useRemoveTodo from "./composition/useRemoveTodo";
export default {
  setup() {
    const { todosRef } = usetodoList();
    return {
      todosRef,
      ...useNewtodo(todosRef),
      ...useFilter(todosRef),
      ...useEditTodo(todosRef),
      ...useRemoveTodo(todosRef),
    };
  },
};
</script>

<style></style>
