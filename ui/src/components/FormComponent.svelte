<script lang="ts">
  import { NEWFORM } from "../state";
  import type { newForm } from "../utils";
  import { orgBurgerMenu, orgGarbage, orgEditMetadata } from "@nrk/origo";
  import KaleidoEditor from "./KaleidoEditor.svelte";
  import FormComponents from "./FormComponents.svelte";
  export let item: any;
  export let index: number;

  function toggleEditMode(): void {
    $NEWFORM[index].editing = !$NEWFORM[index].editing;
  }
  function deleteItem(): void {
    const tempForm: newForm = $NEWFORM;
    tempForm.splice(index, 1);
    $NEWFORM = tempForm;
  }
</script>

<div class="formElement org-grid">
  <div class="org-1of12" style="cursor:grab;">{@html orgBurgerMenu}</div>
  <div class="org-10of12">
    {#if ["text", "date", "file", "email"].includes(item.type)}
      <label>
        {item.label}
        {#if item.required}<span class="required">*</span>{/if}
        <input type={item.type} class="org-input" />
      </label>
    {/if}
    {#if item.type === "textarea"}
      <label>
        {item.label}
        {#if item.required}<span class="required">*</span>{/if}
        <textarea class="org-input"></textarea>
      </label>
    {/if}
    {#if item.type === "checkbox"}
      <label
        >{item.label}
        <input type="checkbox" class="org-input" />
      </label>
    {/if}
    {#if item.type === "label"}
      <p class={item.size}>{item.label}</p>
    {/if}
    {#if item.type === "radioGroup"}
      <p>{item.label}</p>
      <select class="org-input">
        {#each item.items as itm}
          <option value={itm.value}>{itm.name}</option>
        {/each}
      </select>
    {/if}
    {#if item.type === "line"}
      <p>{item.label}</p>
      <hr />
    {/if}
    {#if item.type === "video"}
    <p>{item.label}</p>
    <span>Du må velge en video {item.videoId} {item.videoAspect}</span>
    {/if}
    {#if item.type === "list"}
      <p>{item.label}</p>
      <select class="org-input">
        {#each item.items as itm}
          <option value={itm.value}>{itm.name}</option>
        {/each}
      </select>
    {/if}
    {#if item.type === "checkboxGroup"}
      <p>{item.label}</p>
      {#each item.items as itm}
        <label>
          {itm.name}
          <input type="checkbox" class="org-input" checked={itm.checked} />
        </label>
      {/each}
    {/if}
    {#if item.type === "image"}
    <KaleidoEditor id={item.kaleidoId} format="16:9" button={false}/>
<!--       <figure>
        
        <img alt={item.alt} class="image" src={`https://gfx-stage.nrk.no/${item.kaleidoId}`} />
        <figcaption>{item.label}</figcaption>
      </figure> -->
    {/if}
    {#if item.type === "contract"}
      <label>
        <textarea disabled={true}>Avtaletekst bla bla bla...</textarea>
        <br />
        <label><input type="checkbox" class="org-input" />Lest og godtatt</label>
      </label>
    {/if}
    {#if item.editing}
      <FormComponents type={item.type} {index} componentData={item} />
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
  .image {
    width:350px;
    height:auto;
  }
  .required {
    color: red;
  }
  .h1 {
    font-size: 3em;
  }
  .h2 {
    font-size: 2em;
  }
  .h3 {
    font-size: 1.5em;
  }
</style>
