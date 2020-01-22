<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Welcome</h2>
      <div class="content">

          <button @click="logOut">
            Log out
          </button>

      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["loggedInUser"])
  },
  data() {
    return {
      username: ""
    };
  },
  methods: {
    /**
     * [logOut used to logout user]
     * @return {[type]} [none]
     */
    logOut() {
      const URL = `http://localhost:8080/users/logout`;
      this.$axios({
        method: "get",
        url: URL,
        headers: {
          Accept: "application/json"
        }
      })
        .then(_ => {
          sessionStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
        });
    }
  }
};
</script>
