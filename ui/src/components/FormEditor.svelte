<script lang="ts">
  import FormPreview from "./FormPreview.svelte";
  import FormSettings from "./FormSettings.svelte";
  import AllForms from "./AllForms.svelte";
</script>

<main>
  <aside class="org-grid" style="flex: 0 0 450px" >
    <AllForms />
  </aside>
  <section class="org-grid" >
    <FormPreview />
  </section>
  <aside class="org-grid" style="flex: 0 0 300px" >
    <FormSettings />
  </aside>
</main>

<style>

</style>
