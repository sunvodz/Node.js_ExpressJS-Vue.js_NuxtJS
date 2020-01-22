<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Login</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from "~/components/Notification";

export default {
  components: {
    Notification
  },
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    /**
     * [loginUser used to login the user]
     * @return {[type]} [none]
     */
    login() {
      const { email, password } = this;
      const data = { email, password };
      const URL = "http://localhost:8080/users/login";
      this.$axios({
        method: "post",
        url: URL,
        headers: {
          Accept: "application/json",
          Content: "application/json"
        },
        data: data
      })
        .then(res => {
          sessionStorage.setItem("token", res.data.token);
          this.$router.push("/profile");
        })
        .catch(err => {
          alert("Wrong email/password");
          // eslint-disable-next-line
          console.log(err);
        });
    }
  }
};
</script>
