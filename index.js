
const assert = require('assert');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }
    clear() {
        this._head = null;
        this._tail = null;
    }
    add(key, value) {
        assert(key);

        const node = {
            key: key,
            value: value,
            pred: this._tail,
            next: null
        }
        if (this._tail) {
            this._tail.next = node;
        }
        this._tail = node;
        if (!this._head) {
            this._head = node;
        }
        return node;
    }
    removeNode(node) {
        assert(node);
        assert('key' in node);

        if (node.pred) {
            node.pred.next = node.next;
        } else {
            this._head = node.next;
        }
        if (node.next) {
            node.next.pred = node.pred;
        } else {
            this._tail = node.pred;
        }
    }
    getOldNode() {
        return this._head;
    }
}


class LruCache {
    constructor(size) {
        assert(Number.isInteger(size));
        assert(size > 0);

        this._map = new Map();
        this._ll = new LinkedList();
        this._size = size;
    }
    clear() {
        this._map.clear();
        this._ll.clear();
    }
    has(key) {
        return this._map.has(key);
    }
    put(key, value) {
        if (this._map.has(key)) this.remove(key);
        this._map.set(key, this._ll.add(key, value));
        if (this._map.size > this._size) {
            const node = this._ll.getOldNode();
            this._map.delete(node.key);
            this._ll.removeNode(node);
        }
    }
    get(key) {
        if (!this._map.has(key)) return null;
        const node = this._map.get(key);
        this._ll.removeNode(node);
        this.put(node.key, node.value);
        return node.value;
    }
    remove(key) {
        if (!this._map.has(key)) return;
        const node = this._map.get(key);
        this._ll.removeNode(node);
        this._map.delete(key);
    }
    size() {
        return this._map.size;
    }
}

module.exports = LruCache;
