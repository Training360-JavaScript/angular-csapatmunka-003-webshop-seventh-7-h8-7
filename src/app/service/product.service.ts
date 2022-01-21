import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [
    {
      "id": 1,
      "catId": "cat-1",
      "name": "Earth",
      "author": "John Doe",
      "description": "the novel 1",
      "image": "../../assets/img/cover01.png",
      "price": 19.99,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 2,
      "catId": "cat-1",
      "name": "Wind",
      "author": "John Doe",
      "description": "the novel 2",
      "image": "../../assets/img/cover01.png",
      "price": 29.99,
      "stock": 10,
      "featured": false,
      "active": true
    },
    {
      "id": 3,
      "catId": "cat-2",
      "name": "Fire",
      "author": "John Doe",
      "description": "the novel 3",
      "image": "../../assets/img/cover01.png",
      "price": 39.99,
      "stock": 5,
      "featured": false,
      "active": true
    },
    {
      "id": 4,
      "catId": "cat-2",
      "name": "Sea",
      "author": "Jane Smith",
      "description": "the novel 4",
      "image": "../../assets/img/cover01.png",
      "price": 28.99,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 5,
      "catId": "cat-1",
      "name": "Ocean",
      "author": "Jane Smith",
      "description": "the novel 5",
      "image": "../../assets/img/cover01.png",
      "price": 35.99,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 6,
      "catId": "cat-2",
      "name": "River",
      "author": "Jane Smith",
      "description": "the novel 6",
      "image": "../../assets/img/cover01.png",
      "price": 17.99,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 7,
      "catId": "cat-2",
      "name": "Heaven",
      "author": "Joe Black",
      "description": "the novel 7",
      "image": "../../assets/img/cover01.png",
      "price": 26.99,
      "stock": 4,
      "featured": false,
      "active": true
    },
    {
      "id": 8,
      "catId": "cat-1",
      "name": "Hell",
      "author": "Joe Black",
      "description": "the novel 8",
      "image": "../../assets/img/cover01.png",
      "price": 35.99,
      "stock": 13,
      "featured": false,
      "active": true
    },
    {
      "id": 9,
      "catId": "cat-1",
      "name": "Portrait",
      "author": "Vincent",
      "description": "the novel 9",
      "image": "../../assets/img/cover01.png",
      "price": 33.99,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 10,
      "catId": "cat-1",
      "name": "Landscape",
      "author": "Leonardo",
      "description": "the novel 10",
      "image": "../../assets/img/cover01.png",
      "price": 12.99,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 11,
      "catId": "cat-2",
      "name": "Sun",
      "author": "Galilei",
      "description": "the novel 11",
      "image": "../../assets/img/cover01.png",
      "price": 15.99,
      "stock": 23,
      "featured": true,
      "active": true
    },
    {
      "id": 12,
      "catId": "cat-2",
      "name": "Moon",
      "author": "Galilei",
      "description": "the novel 12",
      "image": "../../assets/img/cover01.png",
      "price": 17.99,
      "stock": 14,
      "featured": false,
      "active": true
    },
    {
      "id": 13,
      "catId": "cat-2",
      "name": "Venus",
      "author": "Galilei",
      "description": "the novel 13",
      "image": "../../assets/img/cover01.png",
      "price": 9.99,
      "stock": 5,
      "featured": false,
      "active": true
    },
    {
      "id": 14,
      "catId": "cat-1",
      "name": "SpaceX",
      "author": "Elon Musk",
      "description": "the novel 14",
      "image": "../../assets/img/cover01.png",
      "price": 25.99,
      "stock": 21,
      "featured": false,
      "active": true
    },
    {
      "id": 15,
      "catId": "cat-1",
      "name": "Tesla",
      "author": "Elon Musk",
      "description": "the novel 15",
      "image": "../../assets/img/cover01.png",
      "price": 21.99,
      "stock": 32,
      "featured": true,
      "active": true
    },

  ]


  constructor() { }

  getAll(): Product[] {
    return this.list;
  }


}
