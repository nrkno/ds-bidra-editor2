<script lang="ts">
    import {orgImage, orgPlay, orgUpload, orgList, orgDate, orgRightsOther} from "@nrk/origo";
</script>
<div class="org-editorial" style="padding: var(--org-small)">
    <h2>Komponenter</h2>
    <button class="org-button"><span style="font-size: 1.5em">A</span> Tekst</button>
    <button class="org-button">{@html orgDate} Dato</button>
    <button class="org-button">{@html orgList} Liste</button>
    <button class="org-button">{@html orgRightsOther} Avtale</button>
    <button class="org-button">{@html orgUpload} Filopplasting</button>
    <button class="org-button">{@html orgImage} Bilder</button>
    <button class="org-button">{@html orgPlay} Video</button>
</div>