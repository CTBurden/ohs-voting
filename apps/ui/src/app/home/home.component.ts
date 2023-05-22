import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players-service/players.service';
import { Player } from '@prisma/client';

@Component({
  selector: 'ohs-voting-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  players!: Player[];

  constructor(public playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players: Player[]) => {
      this.players = players;
    });
  }
}
