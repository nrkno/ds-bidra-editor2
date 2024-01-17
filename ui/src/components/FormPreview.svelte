<script lang="ts">
  import { orgPlus } from "@nrk/origo";
  import { FORM, SAVED_FORM } from "../state";
  import SortableList from "svelte-sortable-list";
  import FormComponent from "./FormComponent.svelte";
  import { defaultData } from "../constants";
  import { v4 as uuidv4 } from "uuid";
  import Contract from "./form/Contract.svelte";

  function addNewItem() {
    $FORM.form.forEach((f) => (f.editing = false));
    const tempForm = $FORM.form.concat([]);
    // @ts-ignore
    tempForm.push({
      ...defaultData["text"],
      _id: uuidv4(),
      editing: true,
      type: "text",
      signiantArgumentName: uuidv4(),
      validations: {required:false},
    });
    //@ts-ignore
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
  {JSON.stringify($FORM, null, 2)}
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
