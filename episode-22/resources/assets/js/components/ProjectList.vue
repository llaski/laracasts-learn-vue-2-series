<template>
  <div v-show="projects.length > 0">
      <h1 class="title is-3">My Projects</h1>

      <ul>
        <li v-for="project in projects">
            <a href="#">{{ project.name }}</a>
        </li>
      </ul>

    <hr>
  </div>
</template>

<script>
export default {

  props: {
    projects:  { required: true },
  }

}
</script>
