<script lang="ts">
  import FormComponents from "./FormComponents.svelte";
  import FormPreview from "./FormPreview.svelte";
</script>

<main>
  <aside class="org-grid" style="flex: 0 0 300px">
    <FormComponents />
  </aside>
  <section class="org-grid">
    <FormPreview />
  </section>
</main>
