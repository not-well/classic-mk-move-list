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

<div class="wrapper">
  <div class="selection-screen">
    {#each characters as character, index}
      <Character game={"mkii"} charName={character.name} callBack={showMoveListOf}/>
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
  }

  .selection-screen {
    display: grid;
    grid-template-columns: repeat(4, 127px);
  }
</style>
