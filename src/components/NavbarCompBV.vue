<template>
  <nav class="navbar navbar-expand-lg pt-3 pb-3"  :class="{ 'navbar': true, 'scrolled': scrolled }">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav-jesu" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" :to="{name: 'mainpage', hash: '#'+'aboutme'}">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" :to="{name: 'mainpage', hash: '#'+'myprojects'}">My Projects</router-link>
            </li>
            <li class="nav-item ml-3">
              <router-link class="nav-link" aria-current="page" :to="{name: 'mainpage', hash: '#'+'toolkit'}">Tool Kit</router-link>
            </li>
            <li class="nav-item ml-3">
              <button type="button" class="btn btn-purple rounded-pill">
                <router-link class="nav-link" aria-current="page" :to="{name: 'mainpage', hash: '#'+'contactform'}">Write Me!</router-link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped>
.navbar{
  position: fixed;
  right: 0px;
  top: 0px;
  left: 0px;
  height: 75px;
}
.navbar{
  background-color: transparent;
}
.navbar.scrolled {
  background-color: rgba(60, 60, 60, 0.4);
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
.rounded-pill {
  text-align: center;
}

</style>
