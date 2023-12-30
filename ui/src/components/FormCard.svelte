<script lang="ts">
      import { writable } from "svelte/store";
    export let form:any;
</script>
<div class="formcard">
    <h3>{form.name}</h3>
    <p>{form.description}</p>
</div>
<style>
    .formcard {
        width:200px;
        height:100px;
        border: 1px solid green;
        padding:var(--org-medium);
        margin:var(--org-medium);
        float:left;
        border-radius: var(--org-medium);
    }
</style>