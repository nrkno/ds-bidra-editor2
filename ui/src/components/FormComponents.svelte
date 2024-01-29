<script lang="ts">
  import { FORM } from "../state";
  import { produce } from "immer";
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
  import { v4 as uuidv4 } from "uuid";
  export let index: number;

  const ELEMENT_SPECIFIC_PROPS = [
    "kaleidoid",
    "imageAltText",
    "contractId",
    "maxFileSize",
    "accept",
    "videoId",
    "videoAspect",
    "items",
  ];
  function updateType(ev: any): void {
    const tempForm = produce($FORM, (draft) => {
      //draft.form[index].kaleidoid = derivateId;
      draft.form[index].signiantArgumentName = uuidv4();
      // delete unused props
      const type = ev.target.value;
      ELEMENT_SPECIFIC_PROPS.forEach((prop: unknown) => {
        //@ts-ignore
        delete draft.form[index][prop];
      });

      switch (type) {
        case "image":
          console.log("saving image case", draft.form[index]);
          draft.form[index].kaleidoid = "U3_Lg50O2IFV_8s4MTzxKAst5YsDnzsr3j5eqQjlq8Yg";
          draft.form[index].imageAltText = "Et bilde";
          break;
        case "email":
          draft.form[index].signiantArgumentName = "email";
        case "file":
          draft.form[index].accept = "imageandvideo";
          break;
        case "contract":
          draft.form[index].contractId = "general";
          break;
        case "list":
          draft.form[index].items = [{ name: "Valg", value: "verdi" }];
          break;
        case "checkboxGroup":
          draft.form[index].items = [{ name: "Valg", checked: true }];
          break;
        case "video":
          draft.form[index].videoId = "0b5f3b0a-7577-4b81-93bb-1d4e85a4aa5a";
          draft.form[index].videoAspect = "16:9";
        default:
          break;
      }
      draft.form[index].type = type;
    });
    FORM.set(tempForm);
  }
  const FORM_COMPONENTS = [
    { id: "text", description: "Kort spørsmål", icon: "<span>A_</span>" },
    { id: "textarea", description: "Langt spørsmål", icon: "<span>ABC_</span>" },
    { id: "date", description: "Dato", icon: orgDate },
    { id: "checkbox", description: "Avkryss", icon: orgCheckC },
    { id: "checkboxGroup", description: "Avkrysningsbokser", icon: orgCheckC },
    { id: "radioGroup", description: "Velg radio", icon: orgDotHollow },
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
  {#if $FORM.form[index]}
    <div class="org-1of12" style="padding-top:5px;padding-right:4px;">
      {@html FORM_COMPONENTS.filter((fc) => fc.id === $FORM.form[index].type)[0]?.icon}
    </div>
    <div class="org-10of12">
      <select value={$FORM.form[index].type} on:change={updateType} class="org-input">
        {#each FORM_COMPONENTS as fc}
          <option value={fc.id}>{fc.description}</option>
        {/each}
      </select>
    </div>
  {/if}
</div>

<style>
</style>
