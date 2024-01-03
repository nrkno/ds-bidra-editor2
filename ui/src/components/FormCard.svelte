<script lang="ts">
  import { FORM } from "../state/index";
  export let form: any;

  function editForm() {
    FORM.set(form);
  }
</script>

<div class="org-editorial org-grid formRow">
  <div class="org-3of12">
    {#if form.kaleidoId}
    <img alt="Bilde til skjema" class="imagebadge" src={`https://gfx.nrk.no/${form.kaleidoId}`}/>
    {:else}
    <img alt="Bilde til skjema" class="imagebadge" src="https://gfx.nrk.no/fHsO7EO53BC6bgrzqZogOAsPovkJ8pgyph0goPNdHUIQ"/>
    {/if}
  </div>
  <div class="org-6of12">
    <h3>{form.name}</h3>
    <p>{form.description}</p>
  </div>
  <div class="org-3of12" style="">
    <button class="org-button org-button--secondary" on:click={editForm}>Velg</button>
  </div>

</div>

<style>
  .imagebadge {
    border-radius: 50%;
    width:45px;
    height:45px;
    margin:4px;
  }
  .formRow {
    height:65px;
    padding:5px;
  }
</style>
