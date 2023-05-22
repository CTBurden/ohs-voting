import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { Player } from '@prisma/client';
import prisma from '../../client';

describe('PlayersController', () => {
  jest.mock('../../client', () => ({
    __esModule: true,
    default: prisma, // Use the mock Prisma client
  }));
  let playersController: PlayersController;
  const mockPlayers: Player[] = [
    {
      id: 1,
      first_name: 'test',
      last_name: 'test',
      ranking: '1',
      division_id: 1,
    },
    {
      id: 2,
      first_name: 'test',
      last_name: 'test',
      ranking: '2',
      division_id: 2,
    },
  ];
  const mockPlayer: Player = {
    id: 1,
    first_name: 'test',
    last_name: 'test',
    ranking: '1',
    division_id: 1,
  };
  const mockError = new Error('Mock error');
  const mockId = 1;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [],
    }).compile();

    playersController = app.get<PlayersController>(PlayersController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getPlayers', () => {
    it('should return an array of players', async () => {
      jest.spyOn(prisma.player, 'findMany').mockResolvedValue(mockPlayers);

      const result = await playersController.getPlayers();

      expect(result).toEqual(mockPlayers);
      expect(prisma.player.findMany).toHaveBeenCalled();
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.player, 'findMany').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.getPlayers();

      expect(prisma.player.findMany).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('createPlayer', () => {
    it('should create a new player', async () => {
      jest.spyOn(prisma.player, 'create').mockResolvedValue(mockPlayer);

      const result = await playersController.createPlayer(mockPlayer);

      expect(result).toEqual(mockPlayer);
      expect(prisma.player.create).toHaveBeenCalledWith({
        data: mockPlayer,
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.player, 'create').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.createPlayer(mockPlayer);

      expect(prisma.player.create).toHaveBeenCalledWith({
        data: mockPlayer,
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('getPlayerById', () => {
    it('should return a player by ID', async () => {
      jest.spyOn(prisma.player, 'findUnique').mockResolvedValue(mockPlayer);

      const result = await playersController.getPlayerById(mockId);

      expect(result).toEqual(mockPlayer);
      expect(prisma.player.findUnique).toHaveBeenCalledWith({
        where: { id: mockId },
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.player, 'findUnique').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.getPlayerById(mockId);

      expect(prisma.player.findUnique).toHaveBeenCalledWith({
        where: { id: mockId },
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updatePlayer', () => {
    it('should update a player', async () => {
      jest.spyOn(prisma.player, 'update').mockResolvedValue(mockPlayer);

      const result = await playersController.updatePlayer(mockId, mockPlayer);

      expect(result).toEqual(mockPlayer);
      expect(prisma.player.update).toHaveBeenCalledWith({
        where: { id: mockId },
        data: mockPlayer,
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.player, 'update').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.updatePlayer(mockId, mockPlayer);

      expect(prisma.player.update).toHaveBeenCalledWith({
        where: { id: mockId },
        data: mockPlayer,
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('deletePlayer', () => {
    it('should delete a player', async () => {
      jest.spyOn(prisma.player, 'delete').mockResolvedValue(mockPlayer);

      const result = await playersController.deletePlayer(mockId);

      expect(result).toEqual(mockPlayer);
      expect(prisma.player.delete).toHaveBeenCalledWith({
        where: { id: mockId },
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.player, 'delete').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.deletePlayer(mockId);

      expect(prisma.player.delete).toHaveBeenCalledWith({
        where: { id: mockId },
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });
});
