// Напиши скрипт, который бы при потере фокуса на
// инпуте, проверял его содержимое на правильное
// количество символов.

// Сколько символов должно быть в инпуте, указывается в
// его атрибуте data - length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputCommon = document.querySelector('#validation-input');

inputCommon.addEventListener('blur', () => {
    if (inputCommon.value === "")
    {
        inputCommon.classList.remove('invalid');
        inputCommon.classList.remove('valid');
    }
    
    else if (inputCommon.value.length >= inputCommon.dataset.length)
    {
        inputCommon.classList.add('valid');
        inputCommon.classList.remove('invalid');
    }
    
    else {
        inputCommon.classList.add('invalid');
        inputCommon.classList.remove('valid');
    } 
});
