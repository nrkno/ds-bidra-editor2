<script lang="ts">
  import { orgPlus } from "@nrk/origo";
  import { produce } from "immer";
  import { FORM, SAVED_FORM } from "../state";
  import SortableList from "svelte-sortable-list";
  import FormComponent from "./FormComponent.svelte";
  import { addNewItem } from "../editState";
  import Contract from "./form/Contract.svelte";

  const sortList = (ev: any) => {
    const tempForm = produce($FORM, (draft) => {
      draft.form = ev.detail;
    });
    FORM.set(tempForm);
  };
</script>

<SortableList list={$FORM.form} key="_id" on:sort={sortList} let:item let:index>
  <FormComponent {item} {index} />
</SortableList>
<div class="addComponent">
  <button class="org-button" on:click={addNewItem}>{@html orgPlus}</button>
</div>

<textarea class="org-6of12">
  {JSON.stringify($FORM, null, 2)}
</textarea>
<textarea class="org-6of12">
  {JSON.stringify($SAVED_FORM, null, 2)}
</textarea>

<style>
  .addComponent {
    width: 100%;
    text-align: center;
    margin: 5px;
    padding: 5px;
    border: 1px dashed darkgrey;
  }
</style>
