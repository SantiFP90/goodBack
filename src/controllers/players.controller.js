import PlayerService from "../services/player.service.js";

class PlayersController {
  async getAllPlayers(req, res) {
    try {
      const players = await PlayerService.getAllPlayers();
      res.json({ message: "Get all players", players });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPlayerById(req, res) {
    const playerId = req.params.id;
    try {
      const player = await PlayerService.getPlayerById(playerId);
      res.json({ message: "Get player by ID", player });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPlayer(req, res) {
    const playerData = req.body;
    try {
      const newPlayer = await PlayerService.createPlayer(playerData);
      res.json({ message: "Player created successfully", player: newPlayer });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePlayer(req, res) {
    const playerId = req.params.id;
    const updateData = req.body;
    try {
      const updatedPlayer = await PlayerService.updatePlayer(
        playerId,
        updateData
      );
      res.json({
        message: "Player updated successfully",
        player: updatedPlayer,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePlayer(req, res) {
    const playerId = req.params.id;
    try {
      const deletedPlayer = await PlayerService.deletePlayer(playerId);
      res.json({
        message: "Player deleted successfully",
        player: deletedPlayer,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new PlayersController();
