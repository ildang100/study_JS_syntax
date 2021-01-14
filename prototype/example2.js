function Animal( type, name, sound ) {
    this.type = type;
    this.name = type;
    this.sound = sound;

}

Animal.prototype.say = function() {
    console.log(this.sound)
}

const dog = new Animal('개', '멍멍이', '멍멍');

const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();