import './index.css';

import { } from './api.js'


// POPUP

const popup_job = document.querySelector('.popup_type_job');
const popupContent = document.querySelector('.popup__content');
const popupClose = document.querySelector('.popup__close');




// Opens the specified popup and activates the closing event listeners
export function openPopup(popupElement) {
    popupElement.classList.add('popup_is-opened');
    activateClosingEventListeners();
}

// Closes the specified popup and deactivates the closing event listeners.
export function closePopup(popupElement) {
    popupElement.classList.remove('popup_is-opened');
    deactivateClosingEventListeners();
}

// Handles the click event on the close button of a popup.
function handlePopupCloseButtonClick(evt) {
    if (evt.target.classList.contains('popup__close')) {
        closePopup(evt.target.closest('.popup'));
    }
}

// Handles the keydown event for the Escape key 
function handleEscClose(evt) { 
    if (evt.key === 'Escape') { 
        closePopup(document.querySelector('.popup_is-opened')); 
    } 
} 

// Handles the click event on the overlay of a popup
function handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup")) {
        closePopup(evt.target);
    } 
};

// Activates the closing event listeners for popups
export function activateClosingEventListeners() {
    document.addEventListener('click', handlePopupCloseButtonClick);
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handleOverlayClose);
}

// Deactivates the closing event listeners for popups
export function deactivateClosingEventListeners() {
    document.removeEventListener('click', handlePopupCloseButtonClick);
    document.removeEventListener('keydown', handleEscClose);
    document.removeEventListener('click', handleOverlayClose);
}



// Handler function to OPEN profile edit form
function openJobPopup() {
    // inputEditProfileName.value = profileName.textContent;
    // inputEditProfileJob.value = profileJob.textContent;
    openPopup(popup_job);
    //clearValidation(editProfilePopup, validationConfig);
}

// Handler function to SUBMIT edit profile form
async function JubSubmitButton(evt) {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        description: formData.get('description'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        city: formData.get('city'),
        education: formData.get('education')
    };
    console.log(data);




    const submitButton = evt.submitter;
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Saving...';

    // const newName = inputEditProfileName.value;
    // const newAbout = inputEditProfileJob.value;

    // try {
    //     await patchChangedProfileData(newName, newAbout);
    //     profileName.textContent = newName;
    //     profileJob.textContent = newAbout;
    //     closePopup(editProfilePopup);
    // } catch (error) {
    //     console.error('Failed to update profile:', error);
    // } finally {
    //     submitButton.textContent = originalButtonText;
    // }
}


// ============================================================================================= EVENT LISTENERS ZONE 
// Event listener to OPEN the profile editing form
document.querySelector('.job-button').addEventListener('click', openJobPopup);
// Event listener to SUBMIT profile editing form
popup_job.addEventListener('submit', JubSubmitButton);