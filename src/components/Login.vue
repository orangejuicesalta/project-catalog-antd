<script setup>
import router from "@/router/index.js";
import { ref, reactive} from "vue";
import {useStore} from '../stores/mainStore'

const store = useStore();
let type = ref("password");
const user = reactive({
  username: ref(""),
  password: ref(""),
});

async function signIn() {
  if (!user.username || !user.password) {
    alert("Enter both login and password");
  } else if (user.username ==='erbol.t' && user.password==='qwe123rty'){
    router.push({ path: "/main" })
  } else {
    alert("Incorrect username or password");
  }
}
</script>

<template>
  <div class="body">
    <div class="container">
      <img src="../assets/main-logo.svg" alt="" class="logo" />
      <div class="greeting">Добро пожаловать в Сервис Доставки Товаров</div>

      <div class="form-container">
        <div class="login-area">
          <img src="../assets/login-icon.svg" alt="" class="icon" />
          <input
            type="text"
            class="input"
            name="Login"
            id="login"
            v-model="user.username"
            placeholder="Логин"
            required
          />
        </div>

        <div class="password-area">
          <div class="password-area-1">
            <img src="../assets/password-icon.svg" alt="" class="icon" />
            <input
              :type="type"
              class="input"
              id="password"
              v-model="user.password"
              placeholder="Пароль"
            />
          </div>
        </div>

        <button class="login-btn" @click="signIn">Вход</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background-color: #001529;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.greeting {
  font-size: 20px;
  margin-top: 50px;
  color: white;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;
  margin-top: 70px;
}
.login-area,
.password-area {
  display: flex;
  flex-direction: row;
  height: 60px;
  border-radius: 5px;
  padding: 20px;
  gap: 10px;
  background-color: white;
  width: 100%;
}
.password-area {
  justify-content: space-between;
  align-items: center;
}
.password-area-1 {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.input {
  border: none;
}
.input:focus {
  outline: none;
}
button {
  background-color: #029aad;
  padding: 16px 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: medium;
  font-weight: bolder;
  cursor: pointer;
}
</style>