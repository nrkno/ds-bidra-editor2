<script lang="ts">
  import { onMount } from "svelte";
  import { getAllActiveForms } from "../api/index";
  import FormCard from "./FormCard.svelte";

  let forms: any = [];
  $: myForms = forms.filter((f:any) => f.createdBy === 'n16271');

  onMount(async () => {
    forms = await getAllActiveForms();
  });
</script>

<div>
  <label>
    Velg skjema
  <input type="text" class="org-input" placeholder="Filtrer"/>
</label>
  <button type="button">Mine skjema ({myForms.length})</button>
  <be-expand>
    {#each myForms as form, index (form._id)}
      <FormCard {form} />
    {/each}
  </be-expand>
  <button type="button">Alle skjema ({forms.length})</button>
  <be-expand hidden>
    {#each forms as form, index (form._id)}
      <FormCard {form} />
    {/each}
  </be-expand>
</div>
