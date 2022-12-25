<script>
export default {
  props: ["text", "url"],
  methods: {
    log() {
      console.log(url);
    },
  },
};
</script>

<template>
  <div>
    <button class="btn-bean" @click="this.$router.push(this.url)">
      {{ this.text }}
    </button>
  </div>
</template>

<style>
.btn-bean {
  min-width: 5rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  font-size: large;
  border: 0;
  border-radius: 15px;
  color: white;
  background-color: #0f1620;
}

.btn-bean:hover {
  color: #0f1620;
  background-color: #ccfc4c;
}
</style>
