const sortingDiv = document.querySelector("#sortingDiv")

// ----------------------- ACCOUNT ICON -----------------------

document.querySelector('#account').addEventListener("click", async() => {
    //todo bryt ut
    if(sessionStorage.getItem("token")) {
        /* If a user is signed in - fetch users TBR-list of book IDs */
        const res = await fetchActiveUser()
        const ratings = res.data.ratedBooks
        const tbr = res.data.tbr
        if(tbr.length == 0) {
            //todo! Add display
            console.log("you have no books");
        }
        if(ratings.length == 0) {
            //todo! Add display
            console.log("you have no books");
        }

        /* Filter global booksArr for the users tbr books IDs --> Render them */
        //todo break out filter function
        const tbrArr = booksArr.filter(book => tbr.map(book => +book.bookId).includes(book.id))   
        renderBooks(tbrArr, "TBR")
        const ratedBooks = booksArr.filter(book => ratings.map(book => +book.bookId).includes(book.id))   
        renderBooks(ratedBooks, "Rated", ulRating)

        renderSelect(booksWrapper, ratedBooks)
    
        sortArray(ratedBooks, ratings)
    
    } else {
        addClass([booksWrapper], "hidden")
        removeClass([forms], "hidden")
    }
})

