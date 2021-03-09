export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.setItem('city', city)
    } catch (e) {}
  }
}
