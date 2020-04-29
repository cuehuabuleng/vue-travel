let defaultCity = '阳春';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {
    alert(error)
}
export default {
    city:defaultCity
}
