const days = {
    input: document.querySelector('#days-input'),
    output: document.querySelector('#days-output'),
    error: document.querySelector('#days-error-message'),
    header: document.querySelector('#days-header')
}
const months = {
    input: document.querySelector('#months-input'),
    output: document.querySelector('#months-output'),
    error: document.querySelector('#months-error-message'),
    header: document.querySelector('#months-header')
}
const years = {
    input: document.querySelector('#years-input'),
    output: document.querySelector('#years-output'),
    error: document.querySelector('#years-error-message'),
    header: document.querySelector('#years-header')
}
const button = document.querySelector('#calculate-button')


const calculateDate = (dt) => {
    const diff = new Date() - dt.getTime()
    const age = new Date(diff)
    const ageObject = { years: age.getUTCFullYear() - 1970, months: age.getUTCMonth() + 1, days: age.getUTCDate() }
    days.output.textContent = ageObject.days
    months.output.textContent = ageObject.months
    years.output.textContent = ageObject.years
}
const removeErrors = (element) => {
    element.input.classList.remove('input-error')
    element.header.classList.remove('header-error')
    element.error.classList.remove('message-error')
    element.error.innerHTML = ''
}
const handleErrors = (element, message) => {
    element.input.classList.add('input-error')
    element.error.classList.add('message-error')
    element.header.classList.add('header-error')
    element.error.innerHTML = message
}
const monthsValidation = () => {
    if (months.value > 12) {
        handleErrors(months, 'Must be a valid month')
    } else if (months.input.value == 0) {
        handleErrors(months, 'This field is required')
    } else {
        removeErrors(months)
        return true
    }
    return false
}
const daysValidation = () => {
    if (days.input.value > 31) {
        handleErrors(days, 'Must be a valid day')
    } else if (days.input.value == 0) {
        handleErrors(days, 'This field is required')
    } else {
        removeErrors(days)
        return true
    }
    return false
}
const yearsValidation = () => {
    if (years.value > 2021) {
        years.value = 2021
    } else if (years.input.value == 0) {
        handleErrors(years, 'This field is required')
    } else {
        removeErrors(years)
        return true
    }
    return false
}


button.addEventListener('click', () => {
    daysValidation(); monthsValidation(); yearsValidation()
    if (daysValidation() && monthsValidation() && yearsValidation()) {
        calculateDate(new Date(years.input.value, months.input.value, days.input.value))
    }
})