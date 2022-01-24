import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = '777 KÖNYVESBOLT';

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'home'},
    {text: 'Életmód', link: '/cat01'},
    {text: 'Szépirodalom', link: '/cat02'},
  ];

  constructor() { }
}
