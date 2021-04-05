import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: any[];

  sortOptions: any[];

  sortOrder: number;

  sortField: string;

  sortKey: string;

  displayModal: boolean = false;

  constructor(
    private primengConfig: PrimeNGConfig,
    private jobsService: JobsService
  ) {}

  ngOnInit() {
    this.getItems().then((data: any[]) => {
      this.items = data;
    });

    // this.jobsService.getJobs().then((data) => {
    //   console.log('JOBS HERE: ', data);
    // });
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
    'Bamboo Watch',
    'Black Watch',
    'Blue Band',
    'Blue T-Shirt',
    'Bracelet',
    'Brown Purse',
    'Chakra Bracelet',
    'Galaxy Earrings',
    'Game Controller',
    'Gaming Set',
    'Gold Phone Case',
    'Green Earbuds',
    'Green T-Shirt',
    'Grey T-Shirt',
    'Headphones',
    'Light Green T-Shirt',
    'Lime Band',
    'Mini Speakers',
    'Painted Phone Case',
    'Pink Band',
    'Pink Purse',
    'Purple Band',
    'Purple Gemstone Necklace',
    'Purple T-Shirt',
    'Shoes',
    'Sneakers',
    'Teal T-Shirt',
    'Yellow Earbuds',
    'Yoga Mat',
    'Yoga Set',
  ];

  generatePrduct(): any {
    const product: any = {
      id: this.generateId(),
      name: this.generateName(),
      description: 'Product Description',
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: 'Product Category',
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating(),
    };

    product.image =
      product.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
    return product;
  }

  getItems() {
    return new Promise((resolve) => {
      resolve([
        {
          category: 'Developer',
          code: 'f230fh1g3',
          description: 'Descrição da vaga aqui 0...',
          id: '1000',
          image: 'logo-google.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para desenvolvedor',
          price: 65,
          quantity: 24,
          rating: 5,
          display: false,
        },
        {
          category: 'Developer',
          code: 'f230fh4g3',
          description: 'Descrição da vaga aqui 1...',
          id: '1001',
          image: 'logo-handtalk.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para desenvolvedor',
          price: 65,
          quantity: 24,
          rating: 5,
          display: false,
        },
        {
          category: 'Softwer Enginer',
          code: 'f230fh8g3',
          description: 'Descrição da vaga aqui 2...',
          id: '1002',
          image: 'logo-peps.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para engenheiro de software',
          price: 65,
          quantity: 24,
          rating: 5,
          display: false,
        },
        {
          category: 'Softwer Enginer',
          code: 'f230fh6g3',
          description: 'Descrição da vaga aqui 3...',
          id: '1003',
          image: 'logo-google.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para engenheiro de software',
          price: 65,
          quantity: 24,
          rating: 5,
          display: false,
        },
      ]);
    });
  }

  generateId() {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }

  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75) + 1);
  }

  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
    return Math.floor(Math.random() * Math.floor(5) + 1);
  }

  public async handleClickItem(item: any) {
    console.log(item);
    const indexOfItem = this.items.findIndex((i) => i.code === item.code);
    console.log('index', indexOfItem);
    this.items = this.items.map((i, index) => {
      if (index === indexOfItem) {
        return {
          ...i,
          display: !i.display,
        };
      }
      return i;
    });
  }
}
