import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createI18n } from "vue-i18n";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHfSFmXocLE1kMFtymLgVJcxvkhcBorCI",
  authDomain: "weather-vue-1df12.firebaseapp.com",
  projectId: "weather-vue-1df12",
  storageBucket: "weather-vue-1df12.appspot.com",
  messagingSenderId: "972731648535",
  appId: "1:972731648535:web:7bb01e67fe380a353e6a52",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      title: "The Local Weather",
    },
    vi: {
      title: "Thời tiết địa phương",
    },
  },
});

app.use(i18n);
app.use(router);

app.mount("#app");
