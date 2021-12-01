IMPORTANT WARNING
=================

Note: I hold all copyrights [or, if singular, copyright] in the GenUni. I have a good faith belief that your use of my material in this manner is not authorized. You are hereby on notice that your use of the Copyrighted Work constitutes copyright infringement and a violation of my intellectual property rights.

GenUni : What is this project?
=====

The basic purpose of this project is to strengthen the connection and interaction between teachers and students.

We used Vue.js for web development, and Firebase to store data.

This allows you to facilitate the rapid exchange of information.

How to Install GenUni
===================

1. Change directory to the project folder
2. Install all the important packages `npm install`.
3. Run project `npm run dev`.

GenUni needs these config to be set into the development environment where it in `src/firebase/firebaseConfig`:

```bash
export default {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}
```

This mechanism avoids the danger of setting a security code in the repo and accidentally committing it.
