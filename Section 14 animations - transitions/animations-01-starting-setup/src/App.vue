<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <!-- Componente para animar, debe tener un hijo directo -->
    <transition>
      <p v-if="paraIsVisible">This in only sometimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
    };
  },

  methods: {
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },

    animateBlock() {
      this.animatedBlock = true;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* opacity: 0; */
  /* transition: all 400ms ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-200px); */
  /* opacity: 1; */
  /*//* Usando animacion Css  */
  animation: slide-fade 0.3s ease-out forwards; /* nameAnimation, tiempo, tipo de funcion, mantiene el frame final*/
}

/* //* Clases que agrega la etiqueta transition cuando se registra un elemento en el DOM */
.v-enter-from {
  /* Estado inicial */
  /* opacity: 0;
  transform: translateY(-30px); */
}

.v-enter-active {
  /* Estado intermedio */
  /* transition: all 0.3s ease-out; */

  animation: slide-scale 0.3s ease-in;
}

.v-enter-to {
  /* Estado final */
  /* opacity: 1;
  transform: translateY(0); */
}
/* //* Clases de salida de un elemento del DOM */
.v-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}

.v-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
}

.v-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}

/* Animacion css */
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-150px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>