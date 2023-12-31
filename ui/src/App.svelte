<script lang="ts">
  import {PAGE} from "../state/index";
  import TopBar from "./components/TopBar.svelte";
  import AllForms from "./components/AllForms.svelte";
  import FormEditor from "./components/FormEditor.svelte";
</script>

<div class="org-root org-splitview">
  <TopBar />
  {#if $PAGE === "ALLFORMS"}
    <AllForms />
  {:else}
    <FormEditor/>
  {/if}
</div>

<style>
</style>
