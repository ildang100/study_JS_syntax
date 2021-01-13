const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    },

];

const  index = todos.findIndex(t => t.id === 3 ) // 해당 객체의 인덱스를 리턴한다.

console.log(index, todos[index])

const todo = todos.find(t => t.id === 2 ) // 만족하는 객체를 리턴 한다.

console.log(todo)