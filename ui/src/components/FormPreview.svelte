<script lang="ts">
  import SortableList from "svelte-sortable-list";
  import FormComponent from "./FormComponent.svelte";
  let componentList:any = [
    { id: 1, label: "Hva heter du?", type: "text" },
    { id: 2, label: "Når ble du født?", type: "date" },
    { id: 3, label: "Last opp fil", type: "file" },
  ];
  const sortList = (ev: any) => {
    componentList = ev.detail;
  };
</script>

<SortableList list={componentList} key="id" on:sort={sortList} let:item let:index>
  <FormComponent {item} {index} />
</SortableList>
