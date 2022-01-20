import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAk5SZlLklRjBZ9RAHONghl8Q7SSSXYiow",
  authDomain: "webxcel.firebaseapp.com",
  projectId: "webxcel",
  storageBucket: "webxcel.appspot.com",
  messagingSenderId: "35523878584",
  appId: "1:35523878584:web:962135cd45b5730b085e4d",
  measurementId: "G-72TBD10VY8",
};
const Fapp = initializeApp(firebaseConfig);
export const install = ({ app, context }: { app: any; context: any }) => {
  app.config.globalProperties.$fireapp = Fapp;
};
