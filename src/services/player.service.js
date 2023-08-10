// services/player.service.js
import playerModel from "../daos/players.schema.js";

class PlayerService {
  async getAllPlayers() {
    try {
      const players = await playerModel.find({});
      return players;
    } catch (error) {
      throw new Error("Error getting players");
    }
  }

  async getPlayerById(id) {
    try {
      const player = await playerModel.findById(id);
      if (!player) {
        throw new Error("Player not found");
      }
      return player;
    } catch (error) {
      throw new Error("Error getting player by ID");
    }
  }

  async createPlayer(playerData) {
    try {
      const newPlayer = await playerModel.create(playerData);
      return newPlayer;
    } catch (error) {
      throw new Error("Error creating player");
    }
  }

  async updatePlayer(id, updateData) {
    try {
      const updatedPlayer = await playerModel.findByIdAndUpdate(
        id,
        updateData,
        {
          new: true,
        }
      );
      if (!updatedPlayer) {
        throw new Error("Player not found");
      }
      return updatedPlayer;
    } catch (error) {
      throw new Error("Error updating player");
    }
  }

  async deletePlayer(id) {
    try {
      const deletedPlayer = await playerModel.findByIdAndDelete(id);
      if (!deletedPlayer) {
        throw new Error("Player not found");
      }
      return deletedPlayer;
    } catch (error) {
      throw new Error("Error deleting player");
    }
  }
}

export default new PlayerService();
