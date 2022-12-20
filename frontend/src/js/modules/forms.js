import {popupsMaker} from "./popups-maker.js";
import IMask from 'imask';

export class formHandler {

    constructor(config) {
        this.formClassName = config.formClassName;
        this.modelInputClassName = config.modelInputClassName;
        this.phoneInputClassName = config.phoneInputClassName;
        this.messageInputClassName = config.messageInputClassName;
        this.sendingFormClassName = config.sendingFormClassName;
        this.mailerConfigPath = config.mailerConfigPath;
        this.successOrderPopupName = config.successOrderPopupName;
        this.successMessagePopupName = config.successMessagePopupName;
        this.failPopupName = config.failPopupName;
    }

    phoneMask(phoneInput) {

        let phoneMaskOptions = {
            mask: [
                {mask: '+00 000 000 00 00', startsWith: '90'},
                {mask: /^\d+$/, startsWith: null},
            ],
            dispatch: function (appended, dynamicMasked) {
                var number = (dynamicMasked.value + appended).replace(/\D/g,'');
            
                return dynamicMasked.compiledMasks.find(function (m) {
                    return !m.startsWith || number.indexOf(m.startsWith) === 0;
                });
            },
        };
    
        let mask = IMask(phoneInput, phoneMaskOptions);
    
    }

    onSubmit (form, 
              modelInput, 
              messageInput, 
              sendingFormClassName,
              mailerConfigPath, 
              successOrderPopupName, 
              successMessagePopupName, 
              failPopupName) {

        form.addEventListener('submit', sendForm);
        
        async function sendForm(event) {

            event.preventDefault();

            let formData = new FormData(form);

            form.classList.add(sendingFormClassName.slice(1));

            let response = await fetch(mailerConfigPath, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {

                let result = await response.json();

                if (result.status == 'Success') {

                    if (modelInput) {

                        popupsMaker.openPopup(successOrderPopupName);

                    } else if (messageInput) {

                        popupsMaker.openPopup(successMessagePopupName);

                    } else {

                        popupsMaker.openPopup(successMessagePopupName);

                    }

                } else {
                    popupsMaker.openPopup(failPopupName);
                }

                console.log(result.report);
                //form.classList.remove(sendingFormClassName.slice(1));

            } else {

                //form.classList.remove(sendingFormClassName.slice(1));
                popupsMaker.openPopup(failPopupName);
                
            }

            form.classList.remove(sendingFormClassName.slice(1));
            form.reset();

        }

    }

    init() {

        const forms = document.querySelectorAll(this.formClassName);
        const modelInputClassName = this.modelInputClassName;
        const phoneInputs = document.querySelectorAll(this.phoneInputClassName);
        const messageInputClassName = this.messageInputClassName;
        const sendingFormClassName = this.sendingFormClassName;
        const mailerConfigPath = this.mailerConfigPath;
        const successOrderPopupName = this.successOrderPopupName;
        const successMessagePopupName = this.successMessagePopupName;
        const failPopupName = this.failPopupName;

        document.addEventListener('DOMContentLoaded', () => {

            phoneInputs.forEach(phoneInput => {
    
                this.phoneMask(phoneInput);
    
            });
    
            forms.forEach(form => {
    
                const modelInput = form.querySelector(modelInputClassName);
                const messageInput = form.querySelector(messageInputClassName);

                this.onSubmit (form, 
                               modelInput, 
                               messageInput, 
                               sendingFormClassName,
                               mailerConfigPath, 
                               successOrderPopupName, 
                               successMessagePopupName, 
                               failPopupName);
    
            });
    
        });

    }

}