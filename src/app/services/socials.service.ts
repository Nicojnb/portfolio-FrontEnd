import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISocials } from '../model/ISocials';
import { SOCIALS } from 'src/assets/data/Socials';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {
  getSoc(): Observable <ISocials[]> {
    const soc = of(SOCIALS);
    return soc;
  }

  constructor() { }
}
