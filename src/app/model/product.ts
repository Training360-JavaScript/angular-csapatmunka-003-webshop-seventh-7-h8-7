export class Product {
  [key: string]: any;
  id: string = '';
  catId: string = '';
  name: string = '';
  author: string = 'John Doe';
  description: string = '';
  image?: string = '';
  previousPrice?: number = 0;
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = true;

  constructor(prop?: Product) {
    if (prop) {
      this.id = prop.id || '';
      this.catId = prop.catId || '';
      this.name = prop.name || '';
      this.author = prop.author || 'John Doe',
      this.description = prop.description || '';
      this.image = prop.image || '';
      this.price = prop.price || 0;
      this.stock = prop.stock || 0;
      this.featured = prop.featured || false;
      this.active = prop.active || true;
    }
  }
}
