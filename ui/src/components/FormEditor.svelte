<script lang="ts">
  import { FORM, SHOWFORMS } from "../state";
  import FormPreview from "./FormPreview.svelte";
  import FormSettings from "./FormSettings.svelte";
  import AllForms from "./AllForms.svelte";
</script>

<main>
  {#if $FORM}
    <aside class="org-grid" style={`flex: 0 0 ${$SHOWFORMS ? 350 : 100}px`}>
      <button class="org-button" on:click={() => ($SHOWFORMS = !$SHOWFORMS)}
        >{$SHOWFORMS ? "Skjul skjema" : "> Vis"}</button
      >
      <AllForms />
    </aside>
    <section class="org-grid">
      <FormPreview />
    </section>
    <aside class="org-grid" style="flex: 0 0 300px">
      <FormSettings />
    </aside>
  {:else}
    <AllForms />
  {/if}
</main>

<style>
</style>
