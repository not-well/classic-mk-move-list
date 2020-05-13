<script>
  export let character;
  export let closeAction;
</script>

<div class="move-list">
  <div class="background" on:click={closeAction}></div>
  <div class="list-container">
    <div class="list">
      <button class="close-button" on:click={closeAction}>X</button>
      <h1>{ character.name }</h1>
    
      <h2>Special Moves</h2>
      <ul>
        {#each character.specialMoves as {name, command}}
          {#if name === "Morphs"}
            <li>
              {name}:
              <ul>
                {#each command as morph}
                  <li>
                    {morph}
                  </li>
                {/each}
              </ul>
            </li>
          {:else}
            <li>
              {name}: {command}
            </li>
          {/if}
        {/each}
      </ul>
    
      <h2>
        Finish Move{character.finishMoves.length > 1 ? 's' : ''}
      </h2>
      <ul>
        {#each character.finishMoves as {name, command}}
          <li>
            {#if name}
              {name}: {command}
            {:else}
              {command}
            {/if}
          </li>
        {/each}
      </ul>
    
      {#if character.combos}
        <h2>Combos</h2>
        <ul>
          {#each character.combos as {name, command}}
            <li>
              {name} hits: {command}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>

<style>
  .close-button {
    width: 10px;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .move-list {
    display: block;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(10, 10, 10);
    opacity: .3;
    transition: opacity .5s;
  }

  /* .list-container {
    padding: 3%;
    overflow: auto;
    background-color: lime;
  } */

  .list-container {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    position: fixed;
    width: 35%;
    height: 100%;
    right: 0%;
    background-color: white;
    transition: right .5s;
    overflow-y: auto;
  }

  .list {
    padding: 7%;
  }

  .list h1 {
    text-align: center;
    margin-bottom: 5%;
  }

  .list h2 {
    margin: 3% 0;
  }
  
  .list h2:nth-child(2) {
    margin: 0 0 3%;
  }

  .list ul {
    padding-left: 3%;
  }

  .list li {
    list-style-type: none;
    margin: 1.5% 0;
  }
  
  .list li:first-child {
    margin-top: 0;
  }
</style>
