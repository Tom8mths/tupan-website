<template>
  <div class="home">
    <NavBar />
    <header>
      <div class="content">
        <h1 class="title">Vamos encontrar seu assento?</h1>
        <div class="buttons">
          <img class="toilet" src="@/assets/img/searchtoilet.png" alt />
          <div class="buttons_container">
            <router-link to=/busca>
              <div class="btn-1">
                <img src="@/assets/img/white-square.png" alt />
                <h2>Conheço o modelo</h2>
              </div>
            </router-link>
            <div class="btn-2">
              <img src="@/assets/img/questionmark.png" alt />
              <div class="btn-2_info">
                <h2>Não conheço o modelo</h2>
                <p>Ajude-me à encontra-lo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- first sectiom -->
    <section>
      <div class="container">
        <h2>Últimos modelos visitados</h2>
        <div class="row">
          <div v-bind:key="product" v-for="product in products" class="product">
            <img src="@/assets/img/lid.png" alt />
            <img class="badges" src="@/assets/img/product_badges.png" alt />
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <h3>R$ {{ product.price }}</h3>
            <p>ou 5x R${{ product.subPrice }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  data: function() {
    return {
      products: [
        {
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },        
      ]
    };
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

header {
  display: flex;
  justify-content: center;
  background: $header-color;
  padding: 60px 0;
  .content {

    @media only screen and (max-width: 580px) {
      .title {
        font-size: 20px;
        text-align: center;
      }
      .buttons {
        .toilet {
          display: none;
          margin: 0;
        }
        .btn-1 {
          margin: 0;
          width: 100%;
        }
      }
    }

    h1 {
      color: $title-black;
      font-weight: 900;
      white-space: nowrap;
      text-align: left;
      font-size: 30px;
    }

    // Buttons

    .buttons {
      display: flex;
      align-items: center;
      font-size: 14px;

      @media only screen and (max-width: 370px) {
        .btn-1 {
          width: 250px;
          h2 {
            font-size: 15px;
          }
        }
        .btn-2 {
          width: 250px;
          h2 {
            font-size: 15px;
          }
        }
      }
      
      &_container {
        width: 100%;
        margin-left: 30px;
        .btn-1 {
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 15px;
          color: #fff;
          background-color: $primary-blue;
          border: $primary-blue 1px solid;
          border-radius: 18px;
          margin-bottom: 20px;
          white-space: nowrap;
          height: 80px;
          box-shadow: $nav-shadow;
          img {
            margin-right: 20px;
            float: left;
          }
        }
        .btn-2 {
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 15px;
          color: #fff;
          background: $red;
          border: $red 1px solid;
          border-radius: 18px;
          box-shadow: $nav-shadow;
          height: 80px;
          &_info {
            h2 {
              white-space: nowrap;
            }
            img {
              float: left;
              margin-right: 20px;
            }
            p {
              white-space: nowrap;
              font-size: 12px;
              text-align: left;
              font-weight: 100;
            }
          }
        }
      }
    }
  }
}

// PRODUCTS SECTION

section {
  h2 {
    padding: 20px 0;
    color: $title-black;
  }
}

.row {
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;
  
  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
}

.product {
  position: relative;
  height: 250px;
  width: 250px;
  display: block;
  border-right: 1px solid $light-grey;
  .badges {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  img {
    display: block;
    margin: 0 auto;
  }
  h3 {
    color: $title-black;
    text-align: center;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-size: 12px;
    color: $grey-text;
    margin-bottom: 20px;
  }
}
</style>
