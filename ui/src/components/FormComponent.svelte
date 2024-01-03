<script lang="ts">
  import {NEWFORM} from "../state";
  import type { newForm } from "../utils";
  import { orgBurgerMenu, orgGarbage, orgEditMetadata } from "@nrk/origo";
  import FormComponents from "./FormComponents.svelte";
  export let item: any;
  export let index: number;

  function toggleEditMode(): void {
    $NEWFORM[index].editing = !$NEWFORM[index].editing;
  }
  function deleteItem(): void {
    const tempForm:newForm = $NEWFORM;
    tempForm.splice(index,1);
    $NEWFORM = tempForm;
  }
</script>

<div class="formElement org-grid">
  <div class="org-1of12" style="cursor:grab;">{@html orgBurgerMenu}</div>
  <div class="org-10of12">
    {#if ["text", "date", "file", "email"].includes(item.type)}
      <label>
       {item.label} {#if item.required}<span class="required">*</span>{/if}
        <input type={item.type} class="org-input" />
      </label>
    {/if}
    {#if item.type === "label"}
      <p>{item.label}</p>
    {/if}
    {#if item.type === "radioGroup"}
      <p>Radio group</p>
    {/if}
    {#if item.type === "image"}
      <figure>
        {item.label}
        <img alt={item.alt} src={`https://gfx-stage.nrk.no/${item.kaleidoId}`} />
      </figure>
    {/if}
    {#if item.editing}
      <FormComponents type={item.type} index={index} componentData={item}/>
    {/if}
  </div>
  <div class="org-1of12">
    <button on:click={deleteItem} class="org-button">{@html orgGarbage}</button>
    <button on:click={toggleEditMode} class="org-button">{@html orgEditMetadata}</button>
  </div>
</div>

<style>
  .formElement {
    padding: 9px;
    margin-bottom: 9px;
  }
  .formElement:hover {
    background: #d8dcdf;
  }
  .required {
    color:red;
  }
</style>
