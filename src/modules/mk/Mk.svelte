<script>
  import Character from "../../components/Character.svelte";
  import Movelist from "../../components/Movelist.svelte";
  import characters from "./Characters.js";

  let selectedCharacter = '';
  let selectedCharElement;
  let isMoveListVisible = false;

  function showMoveListOf(charName, charClassName) {
    selectedCharElement = document.querySelector(`.${charClassName}`);
    isMoveListVisible = true;
    selectedCharacter = characters.filter((char) => char.name === charName)[0];
  }

  function hideMoveList() {
    isMoveListVisible = false;
    selectedCharElement.classList.toggle("selected");
  }
</script>

<!-- <svg>
  <filter id="granite" x="0%" y="0%" width="100%" height="100%">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.12 0.45"
      result="noise"
      numOctaves="4"
    />
  </filter>
    
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    filter="url(#granite)"
    fill="none"
  >
</svg> -->

<div class="wrapper">
  <div class="selection-screen">
    {#each characters as character, index}
      {#if index === 2}
        <Character game={"mk"} charName={"logo"} callBack={null}/>
      {/if}
      <Character game={"mk"} charName={character.name} callBack={showMoveListOf}/>
    {/each}
  </div>
</div>

{#if isMoveListVisible}
  <Movelist character={selectedCharacter} closeAction={hideMoveList}/>
{/if}

<style>
  .wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(10, 10, 10, .5);
  }

  .selection-screen {
    display: grid;
    grid-template-columns: repeat(5, 153px);
    grid-auto-rows: 224px;
    gap: 5px;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
</style>
