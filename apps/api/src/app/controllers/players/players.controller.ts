import { Controller, Get } from '@nestjs/common';
import { PlayersService } from '../../api-services/players/players.service';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  public getProducts() {
    return this.playersService.getProducts();
  }
}
