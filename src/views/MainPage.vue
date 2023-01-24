<template>
  <div>
    <header class="header-container">
      <video id="background-video" autoplay loop muted>
        <source src="../assets/galaxy.mp4" type="video/mp4">
      </video>
    </header>
    <section id="about-me" class="container">
      <h1 class="main-title">About Me</h1>
      <div class="row">
        <div class="col-lg-6 col-xs-12">
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
      <h1 class="main-title">My Projects</h1>
      <div class="row mx-2">
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <img src="../assets/mjp.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <img src="../assets/mjp.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <img src="../assets/mjp.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <img src="../assets/mjp.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <img src="../assets/mjp.png" alt="mariajesus" class="picture img-fluid">
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <img src="../assets/mjp.png" alt="mariajesus" class="picture img-fluid">
        </div>
      </div>
    </section>
    <section id="tool-kit" class="container">
      <h1 class="main-title">Tool Kit</h1>
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

#background-video {
  width: 100%;
  height: 80vh;
  object-fit: cover;
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
</style>