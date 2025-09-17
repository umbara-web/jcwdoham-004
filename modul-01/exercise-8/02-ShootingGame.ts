class Player {
  // Properties are defined with their types
  name: string;
  health: number;
  power: number;

  constructor(name: string, health: number = 100, power: number = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  damage(power: number): void {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }): void {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus(): void {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem(): { health: number; power: number } {
    // Randomly choose between a health item and a power item
    const isHealthItem = Math.random() < 0.5;
    return isHealthItem ? { health: 10, power: 0 } : { health: 0, power: 10 };
  }

  start(): void {
    let turn = 1;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`\n=== Turn ${turn} ===`);

      // Determine current and opponent player
      const currentPlayer = turn % 2 !== 0 ? this.player1 : this.player2;
      const opponentPlayer = turn % 2 !== 0 ? this.player2 : this.player1;

      // Show status before shooting
      console.log('--- Status Before Shooting ---');
      this.player1.showStatus();
      this.player2.showStatus();

      // Get random item for current player
      const item = this.getRandomItem();
      currentPlayer.useItem(item);
      console.log(`${currentPlayer.name} found an item!`);

      // Show status after getting item
      console.log('--- Status After Item ---');
      this.player1.showStatus();
      this.player2.showStatus();

      // Shooting phase
      console.log(
        `${currentPlayer.name} is shooting ${opponentPlayer.name}...`
      );
      opponentPlayer.damage(currentPlayer.power);

      // Check for winner after the turn
      if (opponentPlayer.health <= 0) {
        console.log(`\n💥 GAME OVER! The winner is ${currentPlayer.name}!`);
        return;
      }

      turn++;
    }
  }
}

// Create two player instances
const playerA = new Player('Player A');
const playerB = new Player('Player B');

// Create a new game instance with the two players
const game = new ShootingGame(playerA, playerB);

// Start the game
game.start();
