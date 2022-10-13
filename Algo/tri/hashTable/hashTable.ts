class Item{
    private key: any;
    private value: any;
    constructor(key:any, value:any) {
        this.key = key;
        this.value = value;
    }
}

class HashTable{
    private items: Item[];
    constructor() { }
   
    addItem(item: Item) {
        this.items.push(item);
    }
}
