class Queue {
    private first?: Cell;
    private last?: Cell;
    private size: number = 0;

    addCell(cell: Cell) {
        if (this.size === 0) {
            this.first = cell;
            this.last = this.first;
            this.size = 1;
        } else if (this.size > 0) {
            if (this.last) {
                this.last.next = cell; // on ajoute par la fin
                this.last = cell; // la dernière Cell insérée devient la derniére de la file
                this.size++;
            }
        }
    }
    removeFirstCell() {
        if (!this.first) return;
        const cellToRemove = this.first;
        this.first = this.first.next;
        this.size--;
        return cellToRemove;
    }
    toString() {
        if (this.first) {
            let current = this.first;
            let str = this.first.value;
            while(current.next){
                str += ", " + current.next.value;
                current = current.next;
            }
            return str;
        }
        return "vide";
    }
    isEmpty() {
        return this.size === 0;
    }
}
