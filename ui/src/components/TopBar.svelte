<script lang="ts">
  import { USERDATA } from "../state";
  import { nrkPerson } from "@nrk/core-icons";
  import { orgBidra } from "@nrk/origo";
</script>

<header class="org-bar topbanner">
  <h1>{@html orgBidra} Editor</h1>
  <div class="right">
    {@html nrkPerson}
    {$USERDATA.name}
  </div>
</header>

<style>
  .topbanner {
    align-items: center;
    display: flex;
    background: var(--org-color-black);
    color: var(--org-color-white);
    padding: 0 var(--org-medium);
    height: 50px;
  }
  .right {
    display: flex;
  }
</style>
