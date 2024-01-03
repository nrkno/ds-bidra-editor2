<script lang="ts">
  import {NEWFORM} from "../state";
  import { orgImage, orgPlay, orgUpload, orgList, orgDate, orgRightsOther } from "@nrk/origo";
  export let componentData:any;
  export let index:number;
  function updateLabel(ev:any):void {
    $NEWFORM[index].label = ev.target.value;
  }
  function updateRequired(ev:any):void {
    $NEWFORM[index].required = ev.target.checked;
  }
  function updateType(type:string):void {
    $NEWFORM[index].type = type;
  }
</script>

<div class="org-editorial org-grid" style="padding: var(--org-small)">
  <div class="org-6of12">
    <button
      class="org-button"
      on:click={() => {
        updateType("text");
      }}><span style="font-size: 1.5em">A</span> Tekst</button
    >
    <button
      class="org-button"
      on:click={() => {
        updateType("date");
      }}>{@html orgDate} Dato</button
    >
    <button class="org-button">{@html orgList} Liste</button>
    <button class="org-button">{@html orgRightsOther} Avtale</button>
    <button
      class="org-button"
      on:click={() => {
        updateType("file");
      }}>{@html orgUpload} Filopplasting</button
    >
    <button
      class="org-button"
      on:click={() => {
        updateType("image");
      }}>{@html orgImage} Bilder</button
    >
    <button class="org-button">{@html orgPlay} Video</button>
    <button
      class="org-button"
      on:click={() => {
        updateType("email");
      }}><span style="font-size: 1.5em">@</span> E-post</button
    >
  </div>
  <div class="org-6of12">
    <label>
      Overskrift
      <input type="text" class="org-input" on:blur={updateLabel} value={componentData.label}/>
    </label>
    <label>
      Påkrevd
      <input type="checkbox" class="org-switch" on:change={updateRequired} checked={componentData.required}/>
    </label>
  </div>
</div>

<style>
</style>
