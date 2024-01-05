<script lang="ts">
  export let videoId: string;
  export let videoAspect: string;
  const formWidth: number = 300;
  const imageHeight: number =
    formWidth / (parseInt(videoAspect.split(":")[0]) / parseInt(videoAspect.split(":")[1]));

    console.log("videoId", videoId);
const actualVideoId = videoId.split('/').pop();
if (actualVideoId) {
  videoId = actualVideoId;
}

</script>

<iframe
  title="Ludo video"
  scrolling="no"
  src={`https://static.nrk.no/ludo/latest/video-embed.html#id=${videoId}&referrer=http://bidra.nrk.no&aspect=${videoAspect}`}
  allowFullScreen={true}
  class="iframeVideo"
  style="{`width:${formWidth}px;height:${imageHeight}px;`};"
/>

<style>
  .iframeVideo {
    border: "none";
  }
</style>
