export class Category {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  description: string = '';

  constructor(prop?: Category) {
    if (prop) {
      this.id = prop.id || 0;
      this.name = prop.name || '';
      this.description = prop.description || '';
    }
  }
}
