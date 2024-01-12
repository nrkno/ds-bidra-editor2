<script lang="ts">
  import { FORM } from "../state/index";
  import { onMount } from "svelte";
  import { getAllActiveForms } from "../api/index";
  import FormCard from "./FormCard.svelte";

  let forms: any = [];
  $: myForms = forms.filter((f: any) => f.createdBy === "n16271");

  onMount(async () => {
    forms = await getAllActiveForms();
  });
</script>

<div class={`org-grid ${$FORM ? '':'allFormView'}`}>
  <div class={`org-${$FORM ? '12': '6'}of12`}>
    <button type="button">Mine skjema ({myForms.length})</button>
    <be-expand>
      {#each myForms as form, index (form._id)}
        <FormCard {form} />
      {/each}
    </be-expand>
  </div>
  <div class={`org-${$FORM ? '12': '6'}of12`}>
    <button type="button">Alle skjema ({forms.length})</button>
    <be-expand>
      {#each forms as form, index (form._id)}
        <FormCard {form} />
      {/each}
    </be-expand>
  </div>
</div>

<style>
  .allformview {
    padding: 15px;
  }
</style>
