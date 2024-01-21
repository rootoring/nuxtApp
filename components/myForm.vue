<template>
  <form class="main__form w-50 border border-primary rounded p-3">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Имя сервера</label
      >
      <input
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Введите имя сервера"
        v-model="serverName"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlSelect" class="form-label"
        >Тип сервера</label
      >
      <select
        class="form-select"
        aria-label="Default select example"
        id="exampleFormControlSelect"
        v-model="serverType"
      >
        <option v-for="server of serverTypes" :value="server" :key="server">
          {{ server }}
        </option>
      </select>
    </div>
    <button type="button" class="btn btn-primary" @click="save">Save</button>
  </form>
</template>
<script setup lang="ts">
const props = defineProps({
  serverTypes: {
    type: Array,
    required: true,
  },
});
const serverName = defineModel("serverName");
const serverType = defineModel("serverType");

const emit = defineEmits(["saveChanges"]);
const save = () => {
  emit("saveChanges");
};
</script>
