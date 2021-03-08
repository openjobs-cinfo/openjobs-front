import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products: any;

  sortOptions: any[];

  sortOrder: number;

  sortField: string;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.getProducts().then((data) => {
      console.log('my data', data);
      this.products = data;
    });

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

  getProducts() {
    return new Promise((resolve) => {
      resolve([
        {
          category: 'Developer',
          code: 'f230fh0g3',
          description: 'Descrição da vaga aqui...',
          id: '1000',
          image: 'logo-google.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para desenvolvedor',
          price: 65,
          quantity: 24,
          rating: 5,
        },
        {
          category: 'Developer',
          code: 'f230fh0g3',
          description: 'Descrição da vaga aqui...',
          id: '1000',
          image: 'logo-handtalk.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para desenvolvedor',
          price: 65,
          quantity: 24,
          rating: 5,
        },
        {
          category: 'Softwer Enginer',
          code: 'f230fh0g3',
          description: 'Descrição da vaga aqui...',
          id: '1000',
          image: 'logo-peps.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para engenheiro de software',
          price: 65,
          quantity: 24,
          rating: 5,
        },
        {
          category: 'Softwer Enginer',
          code: 'f230fh0g3',
          description: 'Descrição da vaga aqui...',
          id: '1000',
          image: 'logo-google.png',
          inventoryStatus: 'INSTOCK',
          name: 'Vaga para engenheiro de software',
          price: 65,
          quantity: 24,
          rating: 5,
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
}
