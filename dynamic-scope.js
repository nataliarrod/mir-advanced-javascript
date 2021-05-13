var foo = 'foo';

function bar () {
    console.log(this.foo);
}

// this por defecto en entorno global
//bar();
//el this es el objeto desde el cual estamos invocando la función
const obj = {
    foo: 'baz',
    bar: bar
}
obj.bar();
// el this es el objeto definido por el usuario
const obj2 = {
    foo: 'faz'
}
bar.call(obj2);
bar.apply(obj2);