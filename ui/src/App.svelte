<script lang="ts">
  import "./defineCustomElements.ts";
  import { USERDATA } from "./state";
  import { getUserData } from "./api";
  import TopBar from "./components/TopBar.svelte";
  import FormEditor from "./components/FormEditor.svelte";
  import { onMount } from "svelte";
  onMount(async () => {
    $USERDATA = await getUserData();
  });
</script>

<div class="org-root org-splitview">
  <TopBar userData={$USERDATA} />
  <FormEditor />
</div>

<style>
</style>
