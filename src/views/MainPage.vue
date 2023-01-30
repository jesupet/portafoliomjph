<template>
  <div>
    <header class="header-container typewriter">
      <img src="../assets/portada.jpg" alt="playa" class="img-fluid portada-img">
      <h1 class=" main-tittle">Hello, my name is Maria. I like to learn new things.</h1>
      <!--<video id="background-video" autoplay loop muted>
        <source src="../assets/galaxy.mp4" type="video/mp4">
      </video>-->
    </header>
    <section id="about-me" class="container">
      <h2 class="main-title">About Me</h2>
      <div class="row">
        <div class="col-lg-6 col-xs-12 text-center">
          <img src="../assets/mjp.png" alt="mariajesus" class="picture img-fluid">
          
        </div>
        <div class="col-lg-6 col-xs-12">
          <p class="parrafo">
            Hola, soy la Jesu, tengo 29 años y me encanta el diseño web. Estudié Ingeniería Comercial en la UC, lo que me dió una visión de negocio y de management importante. Siempre me interesé por temas asociados al marketing porque era lo que más se acercaba al diseño dentro de los ramos de la carrera. Luego de unos años trabajando hice un Diplomado de Marketing Digital en la UAI, donde adquirí conocimientos básicos sobre conceptos, sistemas y plataformas necesarias para planificar y evaluar performance de campañas en la web.
            Luego de mi trabajo como Project Manager me quedó el bichito sobre el mundo del código, poder yo misma llevar al código mis mockups. Luego de un par de conversaciones con amigos entendidos en el tema, me decidí por estudiar Front End, ya que combinaba muy bien mi gusto por el diseno y una primera aproximación a la programación. Terminé la carrera en Junio del 2022 y desde ahí he tomado proyectos freelance relacionados a UX, UI y Front End.
          </p>
        </div>
      </div>
    </section>
    <section id="my-projects" class="container-fluid">
      <h2 class="main-title">My Projects</h2>
      <div class="row mx-2">
        <div class="col-sm-6 col-xs-12">
          <button type="button" class="btn btn-purple rounded-pill" to="">
            <a href="https://eleamchile.cl" class="link-web" target="_blank">Eleam Chile</a>
          </button>
          <p class="subtittle">Project Manager / Diseño UX-UI</p>
          <img src="../assets/eleamchile.png" alt="proyecto1" class="picture img-fluid">
        </div>
        <div class="col-sm-6 col-xs-12">
          <button type="button" class="btn btn-purple rounded-pill">
            <a href="https://jesupet.github.io/SaturnoGit/" class="link-web" target="_blank">Satournow!</a>
          </button>
          <p class="subtittle">Proyecto Final Front End / Diseño UX-UI + Front End</p>
          <img src="../assets/satournow.png" alt="proyecto4" class="picture img-fluid" href="https://jesupet.github.io/SaturnoGit/">
        </div>
      </div>
    </section>
    <section id="tool-kit" class="container">
      <h2 class="main-title">Tool Kit</h2>
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <img src="../assets/tool_kit_logos/figma.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <img src="../assets/tool_kit_logos/js.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <img src="../assets/tool_kit_logos/css.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <img src="../assets/tool_kit_logos/vue.png" alt="mariajesus" class="picture img-fluid">
        </div>
      </div>
    </section>
  </div>
</template>


<style>
.header-container {
  display: flex;
  align-items: center;
}
.portada-img {
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
  @media (min-width: 1200px) {
    min-height: 100vh;
  }
}
#background-video {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.main-tittle {
  position: absolute;
  z-index: 100;
  color: #fff;
  font-size: 20px;
  padding-left: 50px;
}
.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #5241B8; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 4.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 50% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #5241B8; }
}
section {
  padding-bottom: 20px;
}
.main-title {
  text-align: center;
  margin: 10px;
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 10px;
  color:#5241B8;
  padding-top: 50px;
  padding-bottom: 30px;
}
.picture, .parrafo {
  padding: 20px;
  text-align: justify;
  font-size: 14px;
  font-style: italic;
}
#my-projects {
  background-color: #71F4CD;
}
.col-sm-6 {
  text-align: center;
}
.btn-purple {
  font-size: 20px;
}
a{
  text-decoration: none;
  color: white;
}
a:hover {
  color: #5241B8;
}
.btn-purple:hover {
  background-color: #fff;
  color: #5241B8;
  border-color: #5241B8;
}
.subtittle {
  color:#5241B8;
  margin-top: 10px;
}

</style>