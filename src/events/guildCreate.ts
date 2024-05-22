import { Interaction } from "discord.js";
import { Flashcore } from "robo.js";

export default async (guild) => {
	const problematicOwnerIds = ['1211747262888419449','1223363297118654469'];

  try {
    if (problematicOwnerIds.includes(guild.ownerId)) {
      console.log(`Leaving guild "${guild.name}" as it is owned by the problematic user.`);
      
      await guild.leave();
    } else {
      console.log(`Joined new guild: ${guild.name}`);
    }
  } catch (error) {
    console.error(`Failed to leave the guild "${guild.name}":`, error);
  }
}

