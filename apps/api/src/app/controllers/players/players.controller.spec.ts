import { Test } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import prismaMock from '../../client';
import { PrismaClient } from '@prisma/client';

describe('PlayersController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: PrismaClient,
          useValue: prismaMock,
        },
      ],
      controllers: [PlayersController],
    }).compile();

    controller = module.get(PlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  describe('getPlayers', () => {
    it('should call prisma', async () => {
      jest.spyOn(prismaMock.players, 'findMany');
      await controller.getPlayers();
      expect(prismaMock.players.findMany).toHaveBeenCalled();
    });
  });

  it('should print to console on error', () => {
    jest.spyOn(console, 'log').mockImplementation();
    jest.spyOn(controller, 'getPlayers').mockImplementation(() => {
      throw new Error('Error');
    });
    controller.getPlayers();
    expect(console.log).toHaveBeenCalled();
  });
});
