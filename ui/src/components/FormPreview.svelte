<script lang="ts">
  import { orgPlus } from "@nrk/origo";
  import { FORM } from "../state";
  import SortableList from "svelte-sortable-list";
  import FormComponent from "./FormComponent.svelte";
  import { defaultData } from "../constants";
  import { v4 as uuidv4 } from "uuid";

  function addNewItem() {
    $FORM.form.forEach((f) => (f.editing = false));
    const tempForm = $FORM.form;
    tempForm.push({
      ...defaultData["text"],
      editing: true,
      type: 'text',
      signiantArgumentName: uuidv4(),
      _id: uuidv4(),
    });
    $FORM.form = tempForm;
  }

  const sortList = (ev: any) => {
    $FORM.form = ev.detail;
  };
</script>

<SortableList list={$FORM.form} key="_id" on:sort={sortList} let:item let:index>
  <FormComponent {item} {index} />
</SortableList>
<div class="addComponent">
  <button class="org-button" on:click={addNewItem}>{@html orgPlus}</button>
</div>

<textarea>
  {JSON.stringify($FORM)}
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
