<template>
  <div id="app">
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">D :) Juice</router-link>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/juice">Juice</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-content">
        <router-link
          to="/juice"
          class="btn-floating btn-large halfway-fab waves-effect waves-light teal"
        >
          <i class="material-icons">add</i>
        </router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>


<style>
nav ul {
  margin-right: 100px;
}
.brand-logo {
  margin-left: 70px;
}
</style>
