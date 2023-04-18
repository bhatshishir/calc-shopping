let arr=[{ id: 1, name: "Tomato", count: 1 },{ id: 2, name: "potat", count: 1 }]
arr.push({ id: 3, name: "rthrr", count: 3 })
console.log(arr.filter(item=>item.id==2?item.count++:item));