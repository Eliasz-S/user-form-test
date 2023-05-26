<template>
  <button class="save-button">
    <slot />
  </button>
</template>

<script setup></script>

<style scoped>
.save-button {
  width: 100%;
  height: 40px;
  background: #01a7fd;
  padding: 10px 20px;
  border-radius: 100px;
  border: none;
  font-family: inherit;
  color: #ffffff;
  margin-top: 15px;
  cursor: pointer;
}
</style>
