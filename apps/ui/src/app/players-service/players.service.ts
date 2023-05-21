import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { players } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlayersService {
  private API_URL = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) {}

  public getPlayers(): Observable<players[]> {
    {
      return this.http.get<players[]>(`${this.API_URL}/players`);
    }
  }
}
