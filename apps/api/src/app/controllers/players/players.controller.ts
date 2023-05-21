import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { players } from '@prisma/client';
import prisma from '../../client';

@Controller('players')
export class PlayersController {
  @Get()
  public getPlayers(): Promise<void | players[]> {
    return prisma.players.findMany().catch((error) => {
      console.log(error);
    });
  }

  @Post()
  public createPlayer(data: players): Promise<void | players> {
    return prisma.players.create({ data }).catch((error) => {
      console.log(error);
    });
  }

  @Get('/:id')
  public getPlayerById(id: number): Promise<void | players> {
    return prisma.players.findUnique({ where: { id } }).catch((error) => {
      console.log(error);
    });
  }

  @Put('/:id')
  public updatePlayer(id: number, data: players): Promise<void | players> {
    return prisma.players.update({ where: { id }, data }).catch((error) => {
      console.log(error);
    });
  }

  @Delete('/:id')
  public deletePlayer(id: number): Promise<void | players> {
    return prisma.players.delete({ where: { id } }).catch((error) => {
      console.log(error);
    });
  }
}
