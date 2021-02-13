let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [12].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)
console.log(obj)