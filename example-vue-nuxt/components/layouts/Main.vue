<template>
  <div class="root">
    <Header />
    <Container />
  </div>
</template>

<script>
import Header from './Header.vue';
import Container from './Container.vue';

export default {
  name: "Main",
  components: {
      Header,
      Container
  },
  data() {
    return {
      
    }
  },
  methods: {},
};
</script>
