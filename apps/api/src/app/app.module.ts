import { Module } from '@nestjs/common';

import { PlayersController } from './controllers/players/players.controller';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [],
})
export class AppModule {}
