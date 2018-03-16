// FIFO (First In, First Out)
function Queue() {
    this.count = 0;
    this.head = null;
    this.tail = null;
}

Queue.prototype.getCount = function() {
    return this.count;
}

Queue.prototype.enqueue = function(data) {
    var node = {};
        node.data = data;
        node.next = this.head;
    
        if(this.head == null) {
            this.tail = node;
        }
        this.head = node;
        this.count++;
}

Queue.prototype.dequeue = function() {
    if(this.count == 0) {
        return null;
    } else {
        var current = this.head;
        var previous = null;

        while(current.next) {
            previous = current;
            current = current.next;
        }

        if(this.count > 1) {
            previous.next = null;
            this.tail = previous;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.count--;
    }
}

Queue.prototype.getAll = function() {
    if(this.head == null) {
        return null;
    } else {
        var array = new Array();
        var current = this.head;
        for(var i=0; i<this.count; i++) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}