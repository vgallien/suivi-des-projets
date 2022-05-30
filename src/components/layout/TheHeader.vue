<template>
  <header>
    <div class="brand"><router-link to="/">Suivi des projets</router-link></div>
    <ul>
      <li>
        <router-link to="/current-week">Semaine en cours</router-link>
      </li>
      <li>
        <router-link to="/projects">Liste des projets</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  padding: 0 40px;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-primary);
}
ul {
  list-style-type: none;
  display: flex;
}
li + li {
  margin-left: 10px;
}
header a {
  padding: 0.8em;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}
header a.router-link-active {
  background: var(--color-secondary);
}

.brand a {
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
