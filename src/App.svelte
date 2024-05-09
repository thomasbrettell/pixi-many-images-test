<script>
  import { onMount } from "svelte";
  import { initSketch } from "./sketch";

  let mountRef;

  onMount(() => {
    initSketch(mountRef);
  });
</script>

<div bind:this={mountRef} />

<style>
  div {
    overflow: hidden;
    display: flex;
  }
</style>
