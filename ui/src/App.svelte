<script lang="ts">
  import { writable } from "svelte/store";
  import TopBar from "./components/TopBar.svelte";
  import AllForms from "./components/AllForms.svelte";
  import FormEditor from "./components/FormEditor.svelte";
  let page: string = "FORM_EDIT";
</script>

<div class="org-root org-splitview">
  <TopBar />
  {#if page === "ALLFORMS"}
    <AllForms />
  {:else}
    <FormEditor />
  {/if}
</div>

<style>
</style>
