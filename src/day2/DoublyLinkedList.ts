type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        }
        if (idx == this.length) {
          this.append(item);
          return;
        }else if (idx == 0){
          this.prepend(item);
          return;
        }

        this.length++
        let curr = this.head;
        for(let i = 0; curr && i < idx; ++i){
          curr = curr.next;
        }
        curr = curr as Node<T>;
        const node = {value : item} as Node<T>;
       
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if(curr.prev){
          curr.prev.next = curr;
        }

    }
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}

