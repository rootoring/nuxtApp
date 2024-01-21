<template>
  <div class="main d-flex p-5 justify-content-around align-items-center vh-100">
    <userLists
      @changeUser="userChange"
      :users="store.users"
      :userIndex="userIndex"
    />
    <MyForm
      v-model:serverName="userData.server_name"
      v-model:serverType="userData.server_type"
      :serverTypes="serverTypes"
      @saveChanges="saveData"
    />
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/store";
import { onMounted } from "vue";
import { type UserType, type serverTypes } from "./types/userTypes";

const store = useStore();
const serverTypes: serverTypes[] = ["dedicated", "vds", "hosting"];
let userIndex: Ref<number> = ref(0);

const userData: Ref<UserType> = ref({
  customer_id: "",
  server_name: "",
  server_type: "vds",
});

const userChange = (i: number) => {
  userIndex.value = i;
  userData.value = JSON.parse(JSON.stringify(store.users[userIndex.value]));
};

const saveData = () => {
  store.users[userIndex.value] = userData.value;
  console.log(11);
};

onMounted(async () => {
  await store.fetchUsers();
  userData.value = JSON.parse(JSON.stringify(store.users[userIndex.value]));
});
</script>
<style>
@media (max-width: 768px) {
  .main {
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    gap: 15px;
  }
  .main__lists {
    width: 100% !important;
  }
  .main__form {
    width: 100% !important;
  }
}
</style>
