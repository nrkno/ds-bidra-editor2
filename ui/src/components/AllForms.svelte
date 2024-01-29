<script lang="ts">
  import { FORM } from "../state/index";
  import Fuse from "fuse.js";
  import { onMount } from "svelte";
  import { getAllActiveForms } from "../api/index";
  import FormCard from "./FormCard.svelte";

  let formFilter: string = "";
  let filteredForms: any = [];

  $: {
    if (formFilter.length > 0) {
      const fuse = new Fuse(forms, fuseOptions);
      filteredForms = fuse.search(formFilter);
    } else {
      filteredForms = forms;
    }
  }
  const fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name", "label", "description", "formContactPerson"],
  };

  let forms: any = [];
  // TODO: Filter on user id from USERDATA
  $: myForms = forms.filter((f: any) => f.createdBy === "n16271");

  onMount(async () => {
    forms = await getAllActiveForms();
  });
</script>

<div class={`org-grid ${$FORM ? "" : "allFormView"}`}>
  <input type="text" class="org-input" bind:value={formFilter} placeholder="Filtrer listen.."/>
  <div class={`org-${$FORM ? "12" : "6"}of12`}>
    <button type="button">Mine skjema ({myForms.length})</button>
    <be-expand>
      {#each myForms as form, index (form._id)}
        <FormCard {form} />
      {/each}
    </be-expand>
  </div>
  <div class={`org-${$FORM ? "12" : "6"}of12`}>
    <button type="button">Alle skjema ({filteredForms?.length} / {forms?.length})</button>
    <be-expand>
      {#each filteredForms as form, index (form._id || form.refIndex)}
        <FormCard form={form?.item || form} />
      {/each}
    </be-expand>
  </div>
</div>

<style>
  .allformview {
    padding: 15px;
  }
</style>
