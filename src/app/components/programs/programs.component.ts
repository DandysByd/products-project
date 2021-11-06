import { Component, OnInit } from '@angular/core';
import { Program } from './../../models/programs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent implements OnInit {
  programs: Program[] = [];

  constructor() {}

  ngOnInit(): void {
    this.programs = [
      {
        id: 'P1',
        description:
          'The very basic product. You can either buy this product for 12$/Month or you can pre-buy it for 120$/Year which means, you can pay only 10$/Month.',
        yearPrice: 10,
        monthPrice: 12,
        features: {
          delivery: true,
          assistance: false,
          insurance: false,
          support: false,
        },
      },
      {
        id: 'P2',
        description:
          'The intermediate product. You can either buy this product for 36$/Month or you can pre-buy it for 360$/Year which means, you can pay only 30$/Month. This product includes daily 24 hours support + guaranteed delivery in under 2 days.',
        yearPrice: 30,
        monthPrice: 36,
        features: {
          delivery: true,
          assistance: false,
          insurance: false,
          support: true,
        },
      },
      {
        id: 'P3',
        description:
          'The pro product. You can either buy this product for 60$/Month or you can pre-buy it for 600$/Year which means, you can pay only 50$/Month. Besides both of P2 bonuses, this product includes 2 weeks insurance for cases, when something goes wrong or you simply dont like this product.',
        yearPrice: 50,
        monthPrice: 60,
        features: {
          delivery: true,
          assistance: false,
          insurance: true,
          support: true,
        },
      },
      {
        id: 'P4',
        description:
          'The master product. You can either buy this product for 120$/Month or you can pre-buy it for 1200$/Year which means, you can pay only 100$/Month. This product is the best we offer, it includes all of our features - delivery in under 2 days, 24/7 support, 2 weeks insurance and even worldwide assistance.',
        yearPrice: 100,
        monthPrice: 120,
        features: {
          delivery: true,
          assistance: true,
          insurance: true,
          support: true,
        },
      },
    ];
  }
}
