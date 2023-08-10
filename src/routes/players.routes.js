import { Router } from "express";
import PlayersController from "../controllers/players.controller.js";

const router = Router();

router.get("/", PlayersController.getAllPlayers);
router.get("/:id", PlayersController.getPlayerById);
router.post("/", PlayersController.createPlayer);
router.put("/:id", PlayersController.updatePlayer);
router.delete("/:id", PlayersController.deletePlayer);

export default router;
