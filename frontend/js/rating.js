const rating = (wrapper) => {
    const stars = wrapper.querySelectorAll("input[name='rate']")
    stars.forEach((star, index, arr) => 
        star.addEventListener('click', (e) => {
            const labels = [...arr].map(star => star.parentElement)
            removeClass(labels, "active");
            labels.slice(0, index + 1).forEach(star => addClass([star], "active"))
        })
    )
}
