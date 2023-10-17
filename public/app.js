"use strict";
// const anchor = document.querySelector("a");
// if (anchor) {
//   console.log(anchor.href);
// }
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// casting
// const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);
// const type = document.querySelector("#type") as HTMLSelectElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;
// form.addEventListener("submit", (e : Event) => {
//     e.preventDefault();
//     console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
// })
//class
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} to ${this.details}`;
    }
    changeClient(client) {
        // this.client = client
    }
}
const inv1 = new Invoice('kb', 'HH', 12);
console.log(inv1.format());
