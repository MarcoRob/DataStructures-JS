function Stack() {
    this.top = null;
    this.count = 0;
}

Stack.prototype.getCount = function() {
    return this.count;
}

Stack.prototype.push = function(data) {
    var node = {};
        node.data = data;
        node.next = null;

    node.next = this.top;    
    this.top = node;
    console.log(this.getCount());
    this.count = this.count + 1;
}

Stack.prototype.peek = function() {
    if(this.top == null) {
        return null;
    } else {
        return this.top.data;
    }
}

Stack.prototype.pop = function(){
    if(this.top == null) {
        return null;
    } else {
        var temp = this.top;

        this.top = this.top.next;

        if(this.count > 0) {
            this.count--;
        }
        return temp.data;
    }
}

Stack.prototype.getAll = function() {
    if(this.top == null) {
        return null;
    } else {
        var array = new Array();
        var current = this.top;
        for(var i=0; i<this.getCount(); i++) {
            array[i] = current.data;
            current = current.next;
        }
        return array;
    }
}