import { Game, UserGame } from "@prisma/client";

export interface GameWithUsers extends Game {
	userGames: UserGame[];
  }
  