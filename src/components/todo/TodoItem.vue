<script setup lang="ts">
defineProps<{
  todo: { id: number; text: string; completed: boolean }
}>()

const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <li :class="{ completed: todo.completed }">
    <input type="checkbox" :checked="todo.completed" @change="emit('toggle', todo.id)" />
    <span>{{ todo.text }}</span>
    <button @click="emit('delete', todo.id)">❌</button>
  </li>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
