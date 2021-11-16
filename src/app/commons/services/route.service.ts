import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  public navigate(rota: String, extras?: NavigationExtras) {
    this.router.navigate([rota], extras);
  }
}
