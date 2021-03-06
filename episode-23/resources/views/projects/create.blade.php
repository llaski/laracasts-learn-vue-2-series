<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css">
    <style>body { padding-top: 40px; }</style>
</head>

<script>
    window.InitialProjects = <?php echo json_encode($projects); ?>
</script>

<body>
    <div id="app" class="container">

        <project-list :projects="projects"></project-list>

        <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            {{ csrf_field() }}

            <div class="control">
                <label for="name" class="label">Project Name:</label>

                <input type="text" id="name" name="name" class="input" v-model="form.name">

                <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>

            <div class="control">
                <label for="description" class="label">Project Description:</label>

                <input type="text" id="description" name="description" class="input" v-model="form.description">

                <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>


            <div class="control">
                <button class="button is-primary" style="margin-top: 1rem;" :disabled="form.errors.any()">Create</button>
            </div>
        </form>
    </div>

    <script src="/js/bundle.js"></script>
</body>
</html>