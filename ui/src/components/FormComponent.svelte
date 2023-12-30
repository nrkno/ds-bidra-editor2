<script lang="ts">
  import { orgBurgerMenu } from "@nrk/origo";
  export let item: any;
  export let index: number;
</script>

<div class="formElement org-grid">
  <div class="org-1of12">{@html orgBurgerMenu}</div>
  <div class="org-11of12">
    <label>
      {item.label}
      <input type={item.type} class="org-input" />
    </label>
  </div>
</div>

<style>
  .formElement {
    padding: 5px;
    margin-bottom: 5px;
  }
</style>
