<script lang="ts">
  import {orgPlus} from "@nrk/origo";
  import {FORM} from "../../state/index";
  import SortableList from "svelte-sortable-list";
  import FormComponent from "./FormComponent.svelte";
  import {mapOldForm} from "../../utils";
  import { onMount } from "svelte";
  let     componentList = mapOldForm($FORM.form);
/*   let componentList:any = [
    { id: 1, label: "Hva heter du?", type: "text" },
    { id: 2, label: "Når ble du født?", type: "date" },
    { id: 3, label: "Last opp fil", type: "file" },
  ]; */

  const sortList = (ev: any) => {
    componentList = ev.detail;
  };
</script>

<SortableList list={componentList} key="id" on:sort={sortList} let:item let:index>
  <FormComponent {item} {index} />
</SortableList>
<div class="addComponent"><button class="org-button">{@html orgPlus}</button></div>

<style>
  .addComponent {
    width:100%;
    text-align: center;
    margin:5px;
    padding:5px;
    border: 1px dashed darkgrey;
  }
</style>