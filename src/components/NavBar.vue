<template>
  <div>
    <nav>
      <div class="container">
        <div v-clickoutside="hideMenu" class="menuMobile dropdown">
          <img @click="menu()" class="dropbtn" src="@/assets/img/mobile_Menu.png" alt="">
          <ol id="myDropdown" class="dropdown-content">
            <li><a href="">Site Institucional</a></li>
            <li><a href="">Fale Conosco</a></li>
            <img src="@/assets/img/mini_square.png" alt="">
            <img src="@/assets/img/mini_square.png" alt="">
            <span class="badge">1</span>
          </ol>
        </div>
        <div class="square">
          <img src="@/assets/img/mini_square.png" alt="">
          <img src="@/assets/img/mini_square.png" alt="">
          <span class="badge">1</span>
        </div>
        <div class="left">
          <router-link to="/">
            <img src="@/assets/img/logo.png" alt />
          </router-link>
            <ul>
              <li><a href="#">Site Institucional</a></li>
              <li><a href="#">Fale Conosco</a></li>
            </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
    methods: {
    menu: function () {
      const dropdown = document.getElementById("myDropdown");
      if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    },
    hideMenu: function () {
      const dropdown = document.getElementById("myDropdown");
      dropdown.style.display = "none";
    },
  },
   directives: {
        clickoutside: {
            bind: function(el, binding, vnode) {
                el.clickOutsideEvent = function(event) {
                    // here I check that click was outside the el and his childrens
                    if (!(el == event.target || el.contains(event.target))) {
                        // and if it did, call method provided in attribute value
                        vnode.context[binding.expression](event);
                    }
                };
                document.body.addEventListener("click", el.clickOutsideEvent);
                document.body.addEventListener("touchstart", el.clickOutsideEvent);
            },
            unbind: function(el) {
                document.body.removeEventListener("click", el.clickOutsideEvent);
                document.body.removeEventListener("touchstart", el.clickOutsideEvent);
            },
            stopProp(event) {
                event.stopPropagation();
            }
        }
    },
};

</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";



nav {
  background-color: #fff;
  max-height: 80px;
  -webkit-box-shadow: $nav-shadow;
  -moz-box-shadow: $nav-shadow;
  box-shadow: $nav-shadow;

  @media only screen and (max-width: 908px) {
    ul {
      display: none;
    }
    .square {
      display: none;
    }
    .menuMobile {
      display: block!important;
      float: right;
      margin-left: 30px;
      margin-top: 30px;
    }
  }
  .menuMobile {
    display: none;
  }
  .square {
    position: relative;
    float: right;
    img {
      margin-left: 30px;
      margin-top: 30px;
    }
    .badge {
      background-color: $red;
      border-radius: 50px;
      position: absolute;
      top: 23px;
      font-size: 10px;
      right: -4px;
      padding: 1px 5px;
      color: #fff;
    }
  }
  ul {
    list-style: none;
    margin-bottom: 40px;
    li {
      margin-left: 40px;
      display: inline-block;
      a {
        color: $title-black;
        text-decoration: none;
      }
    }
  }
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
     -webkit-box-shadow: $nav-shadow;
      -moz-box-shadow: $nav-shadow;
      box-shadow: $nav-shadow;
      @media only screen and (max-width: 480px) {
        width: 200px;
        height: 100px;
      }
    }
  } 
}

// Dropddown
@media only screen and (max-width: 908px) {
  ol {
    position: absolute;
    background-color: #fff;
    width: 320px;
    right: 0px;
    top: 80px;
    height: 150px;
    border: 1px solid $light-grey;
    box-shadow: $nav-shadow;
    img {
      display: inline-block;
      margin: 15px 0 15px 85px;
      position: relative;
      cursor: pointer;
    }
    li {
      text-align: center;
      margin-top: 15px;
      padding-bottom: 10px; 
      list-style-type: none;
      border-bottom: 1px solid $light-grey;
      a {
        color: $title-black;
        text-decoration: none;
        &:hover {
         color: $primary-blue;
         transition: 250ms ease-in-out;
       }
      }
    }
    .badge {
      background-color: $red;
      border-radius: 50px;
      position: absolute;
      top: 108px;
      font-size: 10px;
      right: 88px;
      padding: 1px 5px;
      color: #fff;
    }
  }

}
</style>