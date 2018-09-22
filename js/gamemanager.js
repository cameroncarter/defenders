let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
        case "Daredevil":
          player = new Player(classType, 200, 0, 100, 100, 100);
          break;
        case "Lukecage":
          player = new Player(classType, 200, 150, 200, 50, 50);
          break;
        case "Jessicajones":
          player = new Player(classType, 200, 125, 150, 100, 50);
          break;
        case "Ironfist":
          player = new Player(classType, 200, 50, 150, 100, 75);
          break;
        case "Punisher":
          player = new Player(classType, 200, 0, 100, 100, 50);
          break;
     }
     let getInterface = document.querySelector(".interface");
     getInterface.innerHTML = '<img src="img/' + classType.toLowerCase() + '.png" class="img"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onClick="GameManager.setFight()">Search for enemy!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // Create enemy!
    let enemy00 = new Enemy("Bushmaster", 200, 0, 150, 130, 150);
    let enemy01 = new Enemy("Kingpin", 200, 0, 225, 100, 50);
    let enemy02 = new Enemy("Killgrave", 200, 50, 100, 100, 70);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
    switch (chooseRandomEnemy) {
        case 0:
        enemy = enemy00;
        break;
        case 1:
        enemy = enemy01;
        break;
        case 2:
        enemy = enemy02;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your move</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onClick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="img/' + enemy.classType.toLowerCase() + '.png" alt="' + enemy.classType + '" class=img"><div><h3>' + enemy.classType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}