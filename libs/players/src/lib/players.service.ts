import { Injectable } from '@nestjs/common';
import { PrismaClient, players } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PlayersService {
  public getProducts(): Promise<players[]> {
    return prisma.players.findMany();
  }
}
