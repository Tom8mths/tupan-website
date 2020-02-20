<template>
  <div class="main">
    <NavBar />
    <header>
      <span class="container">Conheço meu modelo</span>
    </header>

    <div class="container">
      <div class="container_content">
        <div class="content">
          <h3>Qual a marca?</h3>
          <span>Geralmente é gravada perto da furação de assento</span>
          <br />
          <input class="input" type="text" />
          <br />
          <br />
          <h3>Qual o modelo?</h3>
          <input class="input" type="text" />
          <br />
          <br />
          <h3>Para qual finalidade?</h3>
          <span>Louças ovais tendem a ser universais, enquanto as de formato especiais dependem do modelo...</span>

          <div class="container_box">
            <img src="../assets/img/question_squaregrey.png" />

            <img src="../assets/img/question_square.png" />
          </div>
          <router-link to="/resultados">
            <a class="btn_search">Buscar</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Search",
  components: {
    NavBar
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.main {
  background-color: $background;
  height: 100vh;
}

header {
  padding: 50px 0;
  background: $header-color;
  span {
    display: block;
    margin-top: 20px;
    font-weight: 900;
    font-size: 22px;
  }
}

.container_content {
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    margin-top: 40px;
    width: 100%;
    max-width: 450px;
    h3 {
      font-size: 22px;
      color: $title-black;
    }
    span {
      font-size: 13px;
      color: $grey-text;
    }
    input {
      margin-top: 5px;
      padding: 12px 50px 12px 10px;
      width: 100%;
      border-radius: 8px;
      background: url("../assets/img/mini_questmark.png") no-repeat scroll;
      background-position: 95% 50%;
      border: 1px solid #c1c1c1;
    }
    .container_box {
      margin-top: 15px;
      display: flex;
      img {
        margin-right: 20px;

        @media only screen and (max-width: 393px) {
            width: auto;
            height: 120px;
        }
      }

    }
    .btn_search {
      display: block;
      margin-top: 30px;
      cursor: pointer;
      padding: 10px 0;
      background-color: $primary-blue;
      border-radius: 18px;
      text-align: center;
      color: #fff;
    }
  }
}
</style>