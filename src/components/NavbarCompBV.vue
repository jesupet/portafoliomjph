<template>
  <nav class="navbar navbar-expand-lg fixed-top mt-3">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav-jesu" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">My Projects</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tool Kit</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-purple rounded-pill" to="/#/contact-form">Write Me!</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "NavbarComp",
  computed: {
    
  },
};
</script>

<style scoped>
.nav-jesu{
  position: fixed;
  right: 40px;
  top: 20px;

}
.btn-purple:hover {
  background-color: #fff;
  color: #5241B8;
}
.nav-item {
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 30px;
}

.nav-link {
  color:#fff;
}
.nav-link:hover {
  color:#5241B8;
}

</style>
