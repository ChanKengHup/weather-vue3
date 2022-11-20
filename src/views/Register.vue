<template>
  <div class="text-center flex flex-col gap-4 container text-white mt-5">
    <h1>Create an Account</h1>
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
    <p><button @click="register">Register</button></p>

    <p><button @click="signInWithGoogle">Sign In with Google</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      router.push("/home");
    })
    .catch((err) => {
      console.log("register unsuccess");
      alert(err.message);
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/home");
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
