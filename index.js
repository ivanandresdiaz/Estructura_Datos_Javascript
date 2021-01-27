class Myarray{
    constructor(){
        this.length = 0;
        this.data={}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        debugger
        this.shiftIndex(index);
        
        return item;
    }
    shiftIndex(index){
        debugger
        for(let i = index; i <this.length; i++){
            this.data[i]= this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    unshift (item) {
        debugger
        for (let i = this.length; i > 0; i--) {
            debugger
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        debugger
        this.length++;
        return this.data;
    }
}
const array= new Myarray();
array.push("Jose");
array.push("Adriana");
array.push("Karen");
array.push("Oscar");
array.push("Nataly");
array.push("Juan Pablo");
array.push("Pedro");
array.push("Nicolas");