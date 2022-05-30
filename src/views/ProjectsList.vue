<template>
  <section>
    <div class="container">
      <h1>Liste des projets</h1>
      <project-item
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
      ></project-item>
      <div>
        <router-link to="/projects/new">Ajouter un projet</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from "../components/projects/ProjectItem.vue";

export default {
  components: {
    ProjectItem,
  },
  computed: {
    projects() {
      return this.$store.getters["projects/projects"];
    },
  },
};
</script>
