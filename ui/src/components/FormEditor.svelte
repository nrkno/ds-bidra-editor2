<script lang="ts">
  import { FORM, SHOWFORMS } from "../state";
  import FormPreview from "./FormPreview.svelte";
  import FormSettings from "./FormSettings.svelte";
  import AllForms from "./AllForms.svelte";
</script>

<main>
  <aside class="org-grid" style={`flex: 0 0 ${$SHOWFORMS ? 450 : 150}px`}>
    <button class="org-button" on:click={() => $SHOWFORMS = !$SHOWFORMS}>{$SHOWFORMS ? "Skjul skjema": "> Vis"}</button>
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
