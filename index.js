const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="style.css">

<form class="container" autocomplete="off" method="post">


<div class="form-element">
    <label class="label" for="username_input">Username: </label><br>
    <input id="username_input" class="form-element--input"  type="email" name="username" required />
</div><br>

<div class="form-element">
    <label class="label" for="password_input">Password: </label><br>
    <input id="password_input" class="form-element--input"  type="password" name="password" required />
</div>
<div>
    <button id="btn">Login</button>
    <button id="btn">Sign Up</button>
</div>
</form>
`
class FormInput extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    attributeChangedCallback(){

    }
}
window.customElements.define("f-input", FormInput);