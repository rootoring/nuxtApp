<template>
  <ul class="main__lists list-group w-25 border border-primary">
    <li
      class="list-group-item list-group-item-action"
      :class="index == userIndex ? 'active' : ''"
      aria-current="true"
      v-for="(user, index) of users"
      :key="user.customer_id"
      @click="change(index)"
    >
      {{ user.customer_id }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { type UserType } from "../types/userTypes";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
  userIndex: {
    type: Number,
    reactive: true,
  },
});
const emit = defineEmits(["changeUser"]);
const change = (i: number) => {
  emit("changeUser", i);
};
</script>
