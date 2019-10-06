module.exports = class Task {
    constructor(id, title, body){
        this.id = id;
        this.title = title;
        this.body = body;
    }
    print(){
        console.log(this.id + " " + this.title + " " + this.body + " ");
    }
};