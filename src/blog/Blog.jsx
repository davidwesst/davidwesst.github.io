import React from "react";
import { greet, add } from "./blogo/pkg/"

const runAdd = () => {
    const numA = Number.parseInt(document.getElementById("a").value);
    const numB = Number.parseInt(document.getElementById("b").value);
    if(Number.isNaN(numA) || Number.isNaN(numB)) {
        greet("Numbers are invalid in WASM!");
    }
    else {
        document.getElementById("answer").value = add(numA, numB).toString();
    }
};

export default function Blog() {
    greet("WASM in REACT!!!!");
    return (
        <main>
            <h2>Blog-- coming soon!</h2>
            <h3>WASM Adder</h3>
            <section>
                <input id="a" name="a" type="number"></input>
                <input id="b" name="b" type="number"></input>
                <input type="button" onClick={runAdd} value="ADD EM UP IN WASM" />
                <article>
                    <input id="answer" name="answer" type="text" readOnly></input>
                </article>
            </section>
        </main>
    );
}