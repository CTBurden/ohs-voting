import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { AppService } from './api-services/app.service';
import { PlayersService } from './api-services/players/players.service';
import { PlayersController } from './controllers/players/players.controller';

@Module({
  imports: [],
  controllers: [AppController, PlayersController],
  providers: [AppService, PlayersService],
})
export class AppModule {}
