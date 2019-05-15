<template>
  <div class="juice">
    <div class="container">
      <div class="row">
        <div class="col m12 center-align">
          <h4>{{ headline }}</h4>
        </div>
        <div class="col s6 m4" v-for="(juice, index) in juices" :key="index">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{{ juice.title }}</span>
              <span @click.prevent="deleteJuice(juice.id)" class="delete">
                <i class="material-icons">delete</i>
              </span>
              <ul class="ings">
                <li v-for=" (ing,index) in juice.ings" :key="index">{{ ing }}</li>
              </ul>
            </div>
            <div class="card-action right-align">
              <a href="#">Price: {{ juice.price }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JuiceAll",
  props: ["juices"],
  data() {
    return {
      headline: "all juice"
    };
  },
  methods: {
    deleteJuice(id) {
      this.juices = this.juices.filter(juice => {
        return juice.id != id;
      });
    }
  }
};
</script>

<style>
.juice h3 {
  text-align: left;
}
.juice ul {
  display: block;
  overflow: hidden;
}
.juice ul li {
  display: inline-block;
  float: left;
  list-style: none;
  padding-right: 15px;
}
.delete {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.card-content {
  height: 170px;
}
</style>
