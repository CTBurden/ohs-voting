import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { players } from '@prisma/client';
import prisma from '../../client';

describe('PlayersController', () => {
  jest.mock('../../client', () => ({
    __esModule: true,
    default: prisma, // Use the mock Prisma client
  }));
  let playersController: PlayersController;
  const mockPlayers: players[] = [
    {
      id: 1,
      first_name: 'test',
      last_name: 'test',
      position: 'test',
      ranking: 1,
    },
    {
      id: 2,
      first_name: 'test',
      last_name: 'test',
      position: 'test',
      ranking: 2,
    },
  ];
  const mockPlayer: players = {
    id: 1,
    first_name: 'test',
    last_name: 'test',
    position: 'test',
    ranking: 1,
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
      jest.spyOn(prisma.players, 'findMany').mockResolvedValue(mockPlayers);

      const result = await playersController.getPlayers();

      expect(result).toEqual(mockPlayers);
      expect(prisma.players.findMany).toHaveBeenCalled();
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.players, 'findMany').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.getPlayers();

      expect(prisma.players.findMany).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('createPlayer', () => {
    it('should create a new player', async () => {
      jest.spyOn(prisma.players, 'create').mockResolvedValue(mockPlayer);

      const result = await playersController.createPlayer(mockPlayer);

      expect(result).toEqual(mockPlayer);
      expect(prisma.players.create).toHaveBeenCalledWith({
        data: mockPlayer,
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.players, 'create').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.createPlayer(mockPlayer);

      expect(prisma.players.create).toHaveBeenCalledWith({
        data: mockPlayer,
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('getPlayerById', () => {
    it('should return a player by ID', async () => {
      jest.spyOn(prisma.players, 'findUnique').mockResolvedValue(mockPlayer);

      const result = await playersController.getPlayerById(mockId);

      expect(result).toEqual(mockPlayer);
      expect(prisma.players.findUnique).toHaveBeenCalledWith({
        where: { id: mockId },
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.players, 'findUnique').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.getPlayerById(mockId);

      expect(prisma.players.findUnique).toHaveBeenCalledWith({
        where: { id: mockId },
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updatePlayer', () => {
    it('should update a player', async () => {
      jest.spyOn(prisma.players, 'update').mockResolvedValue(mockPlayer);

      const result = await playersController.updatePlayer(mockId, mockPlayer);

      expect(result).toEqual(mockPlayer);
      expect(prisma.players.update).toHaveBeenCalledWith({
        where: { id: mockId },
        data: mockPlayer,
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.players, 'update').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.updatePlayer(mockId, mockPlayer);

      expect(prisma.players.update).toHaveBeenCalledWith({
        where: { id: mockId },
        data: mockPlayer,
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe('deletePlayer', () => {
    it('should delete a player', async () => {
      jest.spyOn(prisma.players, 'delete').mockResolvedValue(mockPlayer);

      const result = await playersController.deletePlayer(mockId);

      expect(result).toEqual(mockPlayer);
      expect(prisma.players.delete).toHaveBeenCalledWith({
        where: { id: mockId },
      });
    });

    it('should handle errors and log them', async () => {
      jest.spyOn(prisma.players, 'delete').mockRejectedValue(mockError);
      jest.spyOn(console, 'log').mockImplementation();

      await playersController.deletePlayer(mockId);

      expect(prisma.players.delete).toHaveBeenCalledWith({
        where: { id: mockId },
      });
      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });
});
