import { contactsArr } from "./contactData.js"
/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

patternSearchSubmit.addEventListener('click', findContacts)

function findContacts(e) {
  e.preventDefault()
  contactDisplay.replaceChildren()
  const searchPattern = patternSearchInput.value;
  const regex = new RegExp(searchPattern,'gi')
  const contacts = contactsArr.filter((contact) => {
    console.log('contact.name: ', contact.name)
    return regex.test(contact.name)
})
  console.log('contacts: ', contacts)
  paintContacts(contacts)
}

function paintContacts(contactList) {
  if(contactList) {
    contactList.forEach(contact => {
      renderContact(contact)
      
    });
  }
}

function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    const namePara = document.createElement('p')
    namePara.textContent = contactObj.name
    const emailPara = document.createElement('p')
    emailPara.textContent = contactObj.email
    const phonePara = document.createElement('p')
    phonePara.textContent = contactObj.phone
    contactCard.append(namePara)
    contactCard.append(emailPara)
    contactCard.append(phonePara)
    contactDisplay.appendChild(contactCard)
/*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}