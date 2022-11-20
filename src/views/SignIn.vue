<template>
  <div class="text-center flex flex-col gap-4 container text-white mt-5">
    <h1>Sign in</h1>
    <p>
      <input
        class="py-2 px-1 w-3/4 bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
        type="text"
        placeholder="Email"
        v-model="email"
      />
    </p>
    <p>
      <input
        class="py-2 px-1 w-3/4 bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </p>
    <p v-if="errMsg" class="text-red-500">{{ errMsg }}</p>
    <p><button @click="signIn">Sign in</button></p>

    <p>
      <button @click="handleRouteRegister">
        If you don't have account you can register account
      </button>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const errMsg = ref();
const password = ref("");

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("register sign in");
      router.push("/home");
    })
    .catch((err) => {
      console.log("register success");
      switch (err.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect-password";
          break;

        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
const handleRouteRegister = () => {
  router.push("/register");
};
</script>
