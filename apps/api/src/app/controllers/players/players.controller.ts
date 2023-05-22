import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Player } from '@prisma/client';
import prisma from '../../client';

@Controller('players')
export class PlayersController {
  @Get()
  public getPlayers(): Promise<void | Player[]> {
    return prisma.player.findMany().catch((error) => {
      console.log(error);
    });
  }

  @Post()
  public createPlayer(data: Player): Promise<void | Player> {
    return prisma.player.create({ data }).catch((error) => {
      console.log(error);
    });
  }

  @Get('/:id')
  public getPlayerById(id: number): Promise<void | Player> {
    return prisma.player.findUnique({ where: { id } }).catch((error) => {
      console.log(error);
    });
  }

  @Put('/:id')
  public updatePlayer(id: number, data: Player): Promise<void | Player> {
    return prisma.player.update({ where: { id }, data }).catch((error) => {
      console.log(error);
    });
  }

  @Delete('/:id')
  public deletePlayer(id: number): Promise<void | Player> {
    return prisma.player.delete({ where: { id } }).catch((error) => {
      console.log(error);
    });
  }
}
