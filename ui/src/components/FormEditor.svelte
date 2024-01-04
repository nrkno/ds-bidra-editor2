<script lang="ts">
  import { FORM } from "../state";
  import FormPreview from "./FormPreview.svelte";
  import FormSettings from "./FormSettings.svelte";
  import AllForms from "./AllForms.svelte";
</script>

<main>
  <aside class="org-grid" style="flex: 0 0 450px">
    <AllForms />
  </aside>
  {#if $FORM}
  <section class="org-grid">
    <FormPreview />
  </section>
  {/if}
  {#if $FORM}
    <aside class="org-grid" style="flex: 0 0 300px">
      <FormSettings />
    </aside>
  {/if}
</main>

<style>
</style>
