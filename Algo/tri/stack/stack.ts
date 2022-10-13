class Stack{

    private top?: Cell;
    private size: number = 0;

    constructor() { }
   
    addToTop(cell: Cell){
        if(this.size === 0){
            this.top = cell;
        }else if(this.size > 0){
            if(this.top) {
                cell.next = this.top;
                this.top = cell;
            }
        }
        this.size++;
    }
    deleteFromTop(){
        if(this.size === 0){
            return;
        }else if(this.size > 0){
            if(this.top) {
                const buffer = this.top;
                this.top = this.top.next;
                console.log("this.top = ", this.top);
               
                this.size--;
                return buffer;
            }
        }
    }
    isEmpty() {
        return this.size === 0;
    }
}
