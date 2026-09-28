// Colony Protocol: Influx — ensure FTB Quests book on join.
// FTB Quests 2101.x does not auto-give ftbquests:book; craft needs book + #c:stones
// (weak on void/ship day one). Re-gift if missing so new worlds always start with it.

PlayerEvents.loggedIn((event) => {
  const player = event.player;

  if (player.inventory.count('ftbquests:book') < 1) {
    player.give('ftbquests:book');
  }

  player.tell(Text.of(''));
  player.tell(Text.gold('[ COLONY PROTOCOL: INFLUX ]'));
  player.tell(Text.of('Recovery bay online. Debris becomes typed matter — nothing from nothing.'));
  player.tell(Text.of(''));
  player.tell(Text.aqua('Getting started:'));
  player.tell(
    Text.of('  Press §eB§r (or open the §eQuest Book§r in your inventory) for the quest journal.')
  );
  player.tell(Text.of('  Start with §eWelcome§r — Field Manual unlocks at the chapter gate.'));
  player.tell(Text.of(''));
});
