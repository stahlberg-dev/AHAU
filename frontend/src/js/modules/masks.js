import IMask from 'imask';

export function phoneMask(phoneInputsClassName) {

    const phoneInputs = document.querySelectorAll(phoneInputsClassName);

    for (let phoneInput of phoneInputs) {

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

}