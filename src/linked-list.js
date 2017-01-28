const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node(null, null, null);
        this._tail = new Node(null, null, null);
        //this._tail = null;
        this.length = 0;
    }

    append(data) {
        var node = new Node(data, null, null)

        if (this.length == 0) {
            this._head = node;
            this._tail = node;

        }
        else if (this.length == 1) {
            this._tail = node;
            this._head.next = this._tail;
            this._tail.prev = this._head;
        }
        else
        {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head ;

        for ( var i = 0 ; i < this.length ; i ++)
        {
            if(i == index)
            {
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
    }

    insertAt(index, data) {

        var currentNode = this._head;
        var newNode = new Node(data,null,null)

        for ( var  i = 0 ; i < this.length ; i ++ )
        {
            if ( i == index - 1)
            {
                newNode.prev = currentNode;
                newNode.next = currentNode.next;
                currentNode.next.prev = newNode;
                currentNode.next = newNode;

                this.length++;
            }
            currentNode = currentNode.next;
        }
        return this;
    }

    isEmpty() {
        if ( this.length == 0 )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    clear() {
    }

    deleteAt(index) {
        var currentNode = this._head;

        for ( var i = 0 ; i < this.length ; i ++ )
        {
            if( i == index )
            {

            }
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }

    reverse() {
    }

    indexOf(data) {

        var currentNode = this._head ;
        var check = false;
        for ( var i = 0 ; i < this.length ; i ++)
        {
            if(data == currentNode.data)
            {
                return i;
                check = true;
            }
            currentNode = currentNode.next;
        }
        if ( !check )
        {
            return -1;
        }
    }
}

module.exports = LinkedList;
