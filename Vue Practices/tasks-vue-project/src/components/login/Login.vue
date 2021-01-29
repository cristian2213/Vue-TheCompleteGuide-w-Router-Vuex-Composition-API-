<template>
  <div class="container">
    <span class="wrapper-icon">
      <i class="far fa-address-book far-user--modifier"></i>
    </span>

    <wrapper-form>
      <wrapper-input>
        <label for="email" class="label-login">
          <i class="far fa-envelope"></i>
        </label>

        <input
          type="email"
          name="email"
          id="email"
          class="input-login"
          :class="{
            'input-error': inputEmailErro,
            'input-success': !inputEmailErro,
          }"
          placeholder="Your Email"
          v-model.trim="infoEmail"
          @input="validateInfo"
        />
      </wrapper-input>

      <wrapper-input>
        <label for="password" class="label-login">
          <i class="fas fa-user-lock"></i>
        </label>

        <input
          type="password"
          name="pass"
          id="pass"
          class="input-login"
          :class="{
            'input-error': inputPasswordError,
            'input-success': !inputPasswordError,
          }"
          placeholder="Your Password"
          v-model.number="infoPassword"
          @input="validateInfo"
        />
      </wrapper-input>

      <div class="wrapper-buttom">
        <button class="login-button">Log in</button>

        <div class="wrapper-checkbox">
          <input
            type="checkbox"
            value="remember"
            id="remember"
            class="input-checkbox"
          />
          <label for="remember" class="label-checkbox">Remember me</label>
        </div>
      </div>

      <router-link to="create_account" class="router-link">Sign in</router-link>
    </wrapper-form>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoEmail: null,
      infoPassword: null,
      inputEmailErro: false,
      inputPasswordError: false,
    };
  },

  methods: {
    validateInfo(event) {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* 
        Contraseña incorrecta: debe tener entre 6 y 16 caracteres, al menos un digito, una minúscula, una mayuscula. 
      */
      const passRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;

      switch (event.target.name) {
        case "email":
          if (emailRegex.test(this.infoEmail)) {
            this.inputEmailErro = false;
            return;
          }
          this.inputEmailErro = true;
          break;

        case "pass":
          //console.log(typeof this.infoPassword);
          console.log(this.infoPassword);
          if (passRegex.test(this.infoPassword)) {
            this.inputPasswordError = false;
            return;
          }
          this.inputPasswordError = true;
          break;

        default:
          console.log("Error");
          break;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    220deg,
    rgba(86, 252, 252, 0.8),
    rgba(177, 184, 252, 0.8)
  );
}

.far-user--modifier {
  position: absolute;
  margin: -1.8rem 0 0 -2rem;
  padding: 1.3rem;
  font-size: 3rem;
  background-color: #07cbca;
  color: white;
  border-radius: 50%;
  z-index: 1;
}

.label-login {
  width: 70px;
  height: 50px;
  background-color: #048f8a;
  padding: 1rem;
  text-align: center;
}

.label-login > .far,
.label-login > .fas {
  color: white;
  font-size: 1.1rem;
}

.input-login {
  width: 100%;
  height: 50px;
  padding: 1rem;
  border: none;
  background-color: #eee;
}

.input-login:focus {
  outline: none;
}

.wrapper-buttom {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 0;
}

.login-button {
  display: block;
  padding: 0.8rem 1rem;
  background-color: #048f8a;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  width: 40%;
  transform: scale(0.9);
  transition: background 300ms ease-in, transform 300ms ease-in;
}

.login-button:focus {
  outline: none;
}

.login-button:hover {
  background-color: #02726e;
  transform: scale(1);
}

.wrapper-checkbox {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-checkbox {
  margin: 0 5px 0 0;
}

.label-checkbox {
  font-size: 0.9rem;
  font-weight: 400;
}

.router-link {
  margin: 1rem 0 0 0;
  font-family: "Raleway";
  font-weight: 400;
  color: #048f8a;
  transition: color 300ms ease-in, text-decoration 300ms ease-in;
}

.router-link:hover {
  color: #02726e;
  text-decoration: underline;
}

.input-success {
  color: #048f8a;
}
.input-error {
  color: rgb(232, 8, 8);
}
</style>