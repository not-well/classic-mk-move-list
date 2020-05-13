<script>
  import { onMount } from "svelte";

  export let charName;
  export let game;
  export let callBack;
  let htmlCharName;

  function transformName() {
    htmlCharName = charName.toLowerCase().replace(" ", "-");
  }

  function handleClick() {
    document.querySelector(`.${htmlCharName}`).classList.toggle("selected");

    setTimeout(() => {
      callBack(charName, htmlCharName);
    }, 1000);
  }

  onMount(transformName);
</script>

<!-- <svg class="defs-only">
  <filter
    id="monochrome"
    color-interpolation-filters="sRGB"
    x="0"
    y="0"
    height="100%"
    width="100%"
  >
    <feColorMatrix
      type="matrix"
      values="1    0    0    0    0
              0    1    0    0    0
              0    0    1    0    0
              0    0    0    1    0"
    />
  </filter>
</svg> -->

<div class="character {game} {htmlCharName}" on:click="{handleClick}">
  <img src="images/{game}/{htmlCharName}.png" />
</div>

<style>
  @keyframes blink-border {
    50% {
      border-color: green;
      color: green;
    }
  }

  @keyframes blink-image {
    50% {
      filter: contrast(110%) brightness(60%);
    }
    100% {
      filter: contrast(110%) brightness(60%);
    }
  }

  .character {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .character.selected {
    animation: blink-image 0.2s step-end 5;
    animation-fill-mode: forwards;
    /* filter: grayscale(5%) contrast(130%) brightness(60%) url(#monochrome); */
  }

  .character.mk,
  .character.mk img {
    width: 153px;
    height: 224px;
  }

  .character.mkii,
  .character.mkii img {
    width: 127px;
    height: 184px;
  }

  .character img {
    border: 8px inset rgba(100, 100, 100, 0.5);
    cursor: pointer;
  }

  .character img:hover {
    border: 8px solid lime;
    animation: blink-border 0.2s step-end infinite;
  }

  .character:not(.logo):hover::before {
    content: "1";
    font-size: 3rem;
    font-weight: bolder;
    color: lime;
    position: absolute;
    pointer-events: none;
    animation: blink-border 0.2s step-end infinite;
  }

  .character.mk:not(.logo):hover::before {
    margin-bottom: 6%;
  }

  .character.mkii:not(.logo):hover::before {
    margin-bottom: 5%;
  }

  .character.logo {
    pointer-events: none;
  }

  .character.logo img {
    width: 153px;
    height: 224px;
    border: none;
    cursor: auto;
    pointer-events: none;
    opacity: 0.5;
    clip-path: ellipse(48% 43% at 50% 50%);
  }

  .character.mk.raiden {
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: end;
  }

  .character.mk.scorpion {
    grid-column-start: 4;
    grid-column-end: 6;
  }

  /* .defs-only {
    position: absolute;
    height: 0;
    width: 0;
    overflow: none;
    left: -100%;
  } */
</style>
