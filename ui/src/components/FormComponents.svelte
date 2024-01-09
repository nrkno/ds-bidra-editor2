<script lang="ts">
  import { NEWFORM } from "../state";
  import {
    orgImage,
    orgUpload,
    orgList,
    orgDate,
    orgRightsOther,
    orgCheckC,
    orgDotHollow,
    orgPlayCl,
  } from "@nrk/origo";
  export let index: number;

  function updateType(ev: CustomEvent & { target: { id: string, checked?:boolean, value:string } }): void {
    const type = ev.target.value;
    $NEWFORM[index].type = type;

    switch (type) {
      case "image":
        $NEWFORM[index].kaleidoId = "U3_Lg50O2IFV_8s4MTzxKAst5YsDnzsr3j5eqQjlq8Yg";
        $NEWFORM[index].alt = "Et bilde";
        break;
      case "email":
        $NEWFORM[index].fieldName = "email";
      case "file":
        $NEWFORM[index].accepted = "imageandvideo";
        break;
      case "contract":
        $NEWFORM[index].emailTemplate = "general";
        break;
      case "list":
        $NEWFORM[index].items = [{ name: "Valg", value: "verdi" }];
        break;
      case "checkboxGroup":
        $NEWFORM[index].items = [{ name: "Valg", checked: true }];
        break;
      case "video":
        $NEWFORM[index].videoId = "0b5f3b0a-7577-4b81-93bb-1d4e85a4aa5a";
        $NEWFORM[index].videoAspect = "16:9";
      default:
        break;
    }
  }
  const FORM_COMPONENTS = [
    { id: "text", description: "Kort spørsmål", icon: "<span>A_</span>" },
    { id: "textarea", description: "Langt spørsmål", icon: "<span>ABC_</span>" },
    { id: "date", description: "Dato", icon: orgDate },
    { id: "checkbox", description: "Avkryss", icon: orgCheckC },
    { id: "checkboxGroup", description: "Avkrysningsbokser", icon: orgCheckC },
    {id: "radioGroup", description: "Velg radio", icon: orgDotHollow},
    { id: "list", description: "Liste", icon: orgList },
    { id: "contract", description: "Avtale", icon: orgRightsOther },
    { id: "file", description: "Filopplasting", icon: orgUpload },
    { id: "image", description: "Bilde", icon: orgImage },
    { id: "video", description: "Videoklipp", icon: orgPlayCl },
    { id: "label", description: "Tekst", icon: `<span>A</span>` },
    { id: "line", description: "Skillelinje", icon: `<span>-</span>` },
    { id: "email", description: "E-post", icon: `<span>@</span>` },
  ];
</script>

<div class="org-grid org-editorial" style="padding: var(--org-small)">
  {#if $NEWFORM[index]}
  <div class="org-1of12" style='padding-top:5px;padding-right:4px;'>
    {@html FORM_COMPONENTS.filter(fc => fc.id === $NEWFORM[index].type)[0]?.icon}
  </div>
    <div class="org-10of12">

      <select bind:value={$NEWFORM[index].type} on:change={() => updateType} class="org-input">
        {#each FORM_COMPONENTS as fc}
          <option value={fc.id}>{fc.description}</option>
        {/each}
      </select>
      <!--       <button class="org-button toggleTypesButton">
        Type
        {@html orgDropdownArrowDown}</button
      >
      <bidraeditor-dropdown id={`dd${index}`} hidden>
        {#each FORM_COMPONENTS as fc}
          <button
            class={`org-button${fc.id === componentData.type ? " selectedType" : ""}`}
            on:click={() => {
              updateType(fc.id);
            }}>{@html fc.icon} {fc.description}</button
          >
        {/each}
      </bidraeditor-dropdown> -->
    </div>
  {/if}
</div>

<style>
</style>
