<template>
  <div class="container">
    <h1>Nouveau projet</h1>
    <form class="form" @submit.prevent="saveProject">
      <div class="form-control">
        <label for="project-name">Nom du projet</label>
        <input
          type="text"
          id="project-name"
          v-model.trim="name.val"
          @keypress="clearValidity('name')"
        />
        <p v-if="!name.isValid">Le nom du projet n'est pas valide.</p>
      </div>
      <button>Enregistrer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
    },
    saveProject() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const data = {
        name: this.name.val,
      };
      this.$store.dispatch("projects/newProject", data);
      this.$router.replace("/projects");
    },
  },
};
</script>
