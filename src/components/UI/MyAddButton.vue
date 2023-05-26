<template>
  <button class="add-button">
    <slot />
  </button>
</template>

<script setup></script>

<style scoped>
.add-button {
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border-radius: 100px;
  border: solid 2px #01a7fd;
  background: transparent;
  color: #01a7fd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
}
</style>
