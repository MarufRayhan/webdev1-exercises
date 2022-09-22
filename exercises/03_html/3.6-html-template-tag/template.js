const htmlForm = document.getElementById("form");
const contacts = document.getElementById("contacts")
const contactTemplate = document.getElementById("contact-template")

htmlForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = new FormData(htmlForm);
    const name = formData.get("name");
    const email = formData.get('email')
    const homepage = formData.get('homepage')
 
    // var temp1 = document.getElementById("contact-template").content

    // var copyHtml = document.importNode(temp1,true)
    // var result = copyHtml.querySelector('contact')
    const elementFragment = document.getElementById("contact-template").content.firstElementChild.cloneNode(true);
    // elementFragment.getElementsByTagName('.h2').innerHTML = name;
    const h2 = elementFragment.querySelector("h2")
    h2.innerText = name
  

    // h1.innerText = "Correct Text"
    elementFragment.querySelector('.email').textContent = email;
    elementFragment.querySelector('.homepage').querySelector('a').setAttribute('href',homepage) 
    elementFragment.querySelector('.homepage').querySelector('a').textContent = homepage

    document.getElementById('contacts').appendChild(elementFragment)
    htmlForm.reset();

})