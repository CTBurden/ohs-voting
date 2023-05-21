import { Test } from '@nestjs/testing';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
