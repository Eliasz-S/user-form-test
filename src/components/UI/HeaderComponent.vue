<template>
  <header class="header">
    <router-link class="header__link" to="/">Форма</router-link>
    <router-link class="header__link" to="/preview">Превью</router-link>
  </header>
</template>

<style scoped>
.header {
  width: 100vw;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}
.header__link {
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
  margin: 0 20px;
}
</style>
