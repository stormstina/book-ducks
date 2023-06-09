
// ----------------------- ACCOUNT ICON -----------------------
document.querySelector('#account').addEventListener("click", async() => {
    if(sessionStorage.getItem("token")) {
        removeClass([btnWrapper], "hidden")

        /* If a user is signed in - fetch users TBR-list of book IDs */
        const res = await fetchActiveUser()
        ratings = res.data.ratedBooks
        /* Could use global tbr array, but since I have to fetch the ratings, I can do this as well for now */
        tbr = res.data.tbr
    
        ratedBooks = booksArr.filter(book => ratings.map(book => +book.bookId).includes(book.id))   
        renderBooks(ratedBooks, "Rated")
    
    } else {
        addClass([booksWrapper], "hidden")
        removeClass([forms], "hidden")
    }
})

btnWrapper.querySelector("#ratedBooks").addEventListener("click",  async() => {

    /* If a user is signed in - fetch users TBR-list of book IDs */
    const res = await fetchActiveUser()
    ratings = res.data.ratedBooks
    /* Could use global tbr array, but since I have to fetch the ratings, I can do this as well for now */
    tbr = res.data.tbr

    ratedBooks = booksArr.filter(book => ratings.map(book => +book.bookId).includes(book.id))   
    renderBooks(ratedBooks, "Rated")

})

btnWrapper.querySelector("#tbrBooks").addEventListener("click",  async() => {

    /* If a user is signed in - fetch users TBR-list of book IDs */
    const res = await fetchActiveUser()
    ratings = res.data.ratedBooks
    /* Could use global tbr array, but since I have to fetch the ratings, I can do this as well for now */
    tbr = res.data.tbr

    /* Filter global booksArr for the users tbr books IDs - then renders them */
    const tbrArr = booksArr.filter(book => tbr.map(book => +book.bookId).includes(book.id))   
    renderBooks(tbrArr, "TBR")
})