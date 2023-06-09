import {describe, it} from 'node:test';
import assert from 'node:assert/strict';

/* PRIMERA PARTE: En esta sección deberéis crear las variables necesarias para hacer pasar los tests.
Fíjate en el "assert": son las verificaciones del test, es decir, lo que el test busca para poder pasar.
Para lanzar los tests, ejecuta en un terminal que apunte a la carpeta del ejercicio, el comando "npm t".
Cada vez que ejecutes el comando podrás ir viendo como aparecen más tests en verde.
TIP: Si consideras que hay demasiada información en el terminal, puedes probar a comentar los tests e ir descomentando sólo el que vas a resolver.
*/


describe("Variables en JavaScript", () => {
   it("Pueden contener strings", () => {
        
        // Escribe aquí tu código
        let a = "Hello!";
        let b = "Somos la P7";rrr
        assert.strictEqual(a, "Hello!");
        assert.strictEqual(b, "Somos la P7");
    })

   it("Pueden contener numeros", () => {
        // Escribe aquí tu código
        let c = 2;
        let d = 1498;
        assert.strictEqual(c,2);
        assert.strictEqual(d,1498);
    })

    it("Pueden contener booleanos", () => {
        // Escribe aquí tu código
        let e = true;
        let f = false;

        assert.strictEqual(e,true);
        assert.strictEqual(f,false);
    })

     it("Pueden contener decimales", () => {
        // Escribe aquí tu código
        let g = 1.45;
        let h = 45.99999;

        assert.strictEqual(g,1.45);
        assert.strictEqual(h,45.99999);
    })
})


// SEGUNDA PARTE: En esta sección deberéis crear dos variables por cada test para hacer pasar los tests.

describe("Operaciones aritmeticas en JavaScript", () => {
    it("Suma", () => {
        // Escribe aquí tu código
        let i = 50;
        let j = 50;
        function suma(i,j){
            return i+j;
        }

        assert.strictEqual(i+j,100);
    })

    it("Resta", () => {
        // Escribe aquí tu código
        let k = 2;
        let l = 0.90;
        function resta(k,l){
            return k-l;
        }
        assert.strictEqual(k-l,10);
    })

    it("Multiplicacion", () => {
        // Escribe aquí tu código
        let m = 2;
        let n = 3;
        function multiplicacion(m,n){
            return m*n;
        }

        assert.strictEqual(m*n,6);
    })

    it("Division", () => {
        // Escribe aquí tu código
        let o = 6;
        let p = 2;
        function division(o,p){
            return o/p;
        }

        assert.strictEqual(o/p,3);
    })

    it("Modulo: Investiga que es el operador modulo (%) en JavaScript para resolver este test", () => {
        // Escribe aquí tu código
        let q = 10;
        let r = 5;
        let s = 11;
        function modulo(q,r){
            return q%r;
        }

        assert.strictEqual(q % r,0);
        assert.strictEqual(s % r,1);
    })
})


/describe("Comparaciones en JavaScript", () => {
    it("Usando el comparador de igualdad ===", () => {
        const number = 20;
        // Escribe aquí tu código
        const expression = number === "20";
        assert.strictEqual(expression, false);
    })

    it("Usando el comparador de diferencia !==", () => {
        const language = "JavaScript";
        // Escribe aquí tu código
        const expression = language !== "JavaScript";
        assert.strictEqual(expression, false);
    })
})

describe("Algebra booleana", () => {
    it("Usando el operador AND (&&)", () => {
        // Escribe aquí tu código
        const a = true;
        const b = true;
        const expression = a && b;
        assert.strictEqual(expression, true);
    })

    it("Usando el operador OR (||)", () => {
        // Escribe aquí tu código
        const c = false;
        const d = false;
        const expression = c || d;
        assert.strictEqual(expression, false);
    })
})


// CUARTA PARTE: Pongamos en práctica todo lo aprendido hasta ahora

describe("Operaciones con JavaScript", () => {
    it("Completa las variables que faltan para pasar los tests, toca darle al coco!", () => {
        // Escribe aquí tu código
        const a = 5;
        const b = 6;
        const c = 1;
        assert.strictEqual(a + b, 11);
        assert.strictEqual(b + c, 7);
        assert.strictEqual(a * c, 12);
    })

    it("Completa las variables que faltan para pasar los tests", () => {
        // Escribe aquí tu código
        const d = 2;
        const e = 11;
        const f = 4;
        assert.strictEqual(d * e, 22);
        assert.strictEqual(e * f, 40);
    })

    it("Completa las variables que faltan para pasar los tests", () => {
        // Escribe aquí tu código
        const a = 10;
        const b = 100;
        const c = undefined;
        const d = "Hello";
        const e = "Example";
        assert.strictEqual(a > 9, true);
        assert.strictEqual(a < 11, true);
        assert.strictEqual(b === 100, true);
        assert.strictEqual(c !== undefined, false);
        assert.strictEqual(d !== "Hello", false);
        assert.strictEqual(e.startsWith("E"), true);
    })
})

