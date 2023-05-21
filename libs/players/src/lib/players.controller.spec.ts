import { Test } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

describe('PlayersController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PlayersService],
      controllers: [PlayersController],
    }).compile();

    controller = module.get(PlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
