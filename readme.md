LruCache
===========

Example

```javascript
const LruCache = require('lrucache');

const cache = new LruCache(3);

for (let i = 0; i < 6; i++) {
    cache.put('k' + i, 'v' + i);const cache = new LruCache(3);

for (let i = 0; i < 6; i++) {
    cache.put('k' + i, 'v' + i);
}

assert(cache.size() === 3);

for (let i = 0; i < 6; i++) {
    assert(cache.has('k' + i) === i >= 3);
}
for (let i = 0; i < 6; i++) {
    assert(cache.get('k' + i) === i < 3 ? null : 'v' + i);
}
}

assert(cache.size() === 3);

for (let i = 0; i < 6; i++) {
    assert(cache.has('k' + i) === i >= 3);
}
for (let i = 0; i < 6; i++) {
    assert(cache.get('k' + i) === i >= 3 ? 'v' + i : null);
}
```