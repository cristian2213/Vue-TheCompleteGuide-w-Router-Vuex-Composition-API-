function getRamdomValue(min, max) {
  // min value: 5
  // max value: 12
  // formula to calculate: ramdom * (max - min) + min;
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },

  watch: {
    /* always the observable must be equal to the property to observe */
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // player lost
        this.winner = 'monster';
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // monster lost
        this.winner = 'player';
      }
    },
  },

  // reactivo
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },

    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },

    mayUsesSpecialAttack() {
      return this.currentRound % 4 !== 0; // return true o false
    },
  },

  methods: {
    surrender() {
      this.winner = 'monster';
      this.surrender = true;
    },

    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },

    attackMonster() {
      this.currentRound++;
      const attackValue = getRamdomValue(5, 12);
      this.monsterHealth -= attackValue;

      // register attack
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRamdomValue(8, 15);
      this.addLogMessage('monster', 'attack', attackValue);
      this.playerHealth -= attackValue;
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRamdomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = getRamdomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },

    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount('#game');
