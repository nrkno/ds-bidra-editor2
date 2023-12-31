<script lang="ts">
  import {PAGE} from "../../state/index";
  import { nrkPerson } from "@nrk/core-icons";
  import {orgArrowLinkBack} from "@nrk/origo";
  function goBack(){
    $PAGE="ALLFORMS";
  }
</script>

<header class="org-bar topbanner">
<h1>Bidra Editor</h1>
  <div class="right">
        {@html nrkPerson}
      Anders W
  </div>
</header>
{#if $PAGE !== "ALLFORMS"}
<div class="navigation">
  <button class="org-button" on:click={goBack}>{@html orgArrowLinkBack} Tilbake til oversikt
  </button></div>
{/if}

<style>
.topbanner {
  align-items: center;
  display:flex;
  background: var(--org-color-black);
  color: var(--org-color-white);
  padding: 0 var(--org-medium);
  height:50px;
}
.navigation {
  padding:5px;
}
.right {
  display: flex;
}
</style>
