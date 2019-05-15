<template>
  <div class="juice">
    <div class="container">
      <div class="row">
        <div class="col m12">
          <h4 class="center-align">{{ headline }}</h4>
          <form action @submit.prevent="juiceAdd">
            <input type="text" name="title" v-model="title" placeholder="title">
            <input type="number" name="price" v-model="price" placeholder="price">
            <div v-for="(ing, index) in ings" :key="index">
              <input type="text" v-model="ings[index]">
            </div>
            <input
              type="text"
              name="another"
              v-model="another"
              @keydown.tab.prevent="ingsAdd"
              placeholder="press 'TAB' to add ingredients"
            >
            <button type="submit" class="btn waves-effect red">Add Juice</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JuiceAdd",
  props: ["juices"],
  data() {
    return {
      headline: "add new juice",
      title: null,
      price: null,
      ings: [],
      another: null
    };
  },
  methods: {
    juiceAdd() {
      let items = [];
      items.title = this.title;
      items.price = this.price;
      items.ings = this.ings;
      items.id = this.juices.length + 1;
      this.juices.push(items);
      this.title = null;
      this.ings = [];
    },
    ingsAdd() {
      if (this.another) {
        this.ings.push(this.another);
        console.log(this.ings);
        this.another = null;
      }
    }
  }
};
</script>
