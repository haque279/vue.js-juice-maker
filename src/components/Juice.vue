<template>
  <div class="juice">
    <JuiceAdd :juices="juices"/>
    <JuiceAll :juices="juices"/>
  </div>
</template>

<script>
import JuiceAll from "../components/JuiceAll.vue";
import JuiceAdd from "../components/JuiceAdd.vue";

export default {
  name: "Juice",
  components: {
    JuiceAll,
    JuiceAdd
  },
  data() {
    return {
      juices: [
        {
          id: 1,
          title: "Mango juice",
          price: 200,
          ings: ["mango", "sugar", "water", "solt"]
        },
        {
          id: 2,
          title: "Orange juice",
          price: 250,
          ings: ["orange", "water", "solt"]
        },
        {
          id: 3,
          title: "Apple juice",
          price: 300,
          ings: ["apple", "water"]
        }
      ]
    };
  }
};
</script>
