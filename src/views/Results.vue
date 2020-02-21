<template>
  <div class="home">
    <NavBar />
    <header>
      <div class="container">
        <span>Conheço meu modelo
          <img src="@/assets/img/squaredquestion.png"> 
          <span>Pesquisa</span>
        </span>
      </div>
    </header>
    <!-- first sectiom -->
    <section>
      <div class="container">
        <div class="search-field">
          <div class="marca">
            <label for="brand">Marca</label>
            <input class="input" type="text" />
          </div>
          <div class="marca">
            <label for="brand">Marca</label>
            <input class="input" type="text" />
          </div>
          <div class="marca">
            <label for="type">Tipo de uso</label>
            <input class="input" type="text" />
          </div>
          <a class="btn_search">Buscar</a>
        </div>
        <h2>Resultado</h2>
        <div class="row">
          <div v-bind:key="product.id" v-for="product in products" class="product">
            <img src="@/assets/img/lid.png" alt="">
            <img class="badges" src="@/assets/img/product_badges.png" alt="">
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
import NavBar from '@/components/NavBar.vue';

export default {
  name: "Results",
    data: function() {
    return {
      products: [
        {
          id: 1,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 2,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 3,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 4,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 5,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 6,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 7,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        }, 
        {
          id: 8,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 9,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 10,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 11,
          name: "Atlas Duraguard",
          description: "Universal - Oval, Linha Care e Alto Fluxo",
          price: 100.00,
          subPrice: 20.00,
        },
        {
          id: 12,
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
  padding: 50px 0;
  background: $header-color;
  span {
    display: inline-block;
    margin-top: 20px;
    font-weight: 900;
    font-size: 22px;
    color: $title-black;
  }
}

// Search field 

.search-field {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    display: block;
    .marca {
      margin-top: 0px!important;
    }
    .btn_search {
      padding: 10px;
      width: 100%;
    }
  }

  .marca {
    display: block;
    float: left;
    margin-top: 40px;
    margin-right: 20px;
    label {
      font-size: 14px;
      color: $grey-text;
    }
    input {
      margin: 5px 25px 25px 0;
      padding: 12px 50px 12px 10px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid $light-grey;
      background: url("../assets/img/mini_questmark.png") no-repeat scroll;
      background-position: 95% 50%;
    }
  }
  .btn_search {
    cursor: pointer;
    color: #fff;
    background-color: $primary-blue;
    border: $primary-blue 1px solid;
    border-radius: 18px;
    height: 50px;
    width: 300px;
    text-align: center;
    box-shadow: $nav-shadow;
    margin-top: 40px;
    padding-top: 10px;
  }
}

h2 {
  margin-top: 20px;
  color: $title-black;
}

// Results 
.row {
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
  margin-bottom: 50px;
  padding-right: 20px;
  .badges {
    position: absolute;
    top: 10px;
    right: 12px;
  }
  img {
    display: block;
    margin: 0 auto;
  }
  h3 {
    color: $title-black;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 12px;
    color: $grey-text;
    margin-bottom: 20px;
  }
}

</style>
