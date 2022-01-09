// Done
function findAuthorById(authors, id) {
  return authors.find((name) => name.id == id);
}
// Done
function findBookById(books, id) {
  return books.find((name) => name.id == id);
}
// Done
function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned == false);
  let returned = books.filter((book) => book.borrows[0].returned == true);
  let total = [borrowed, returned];
  return total;
}
// Done
function getBorrowersForBook(book, accounts) {
  let idList = [...book.borrows];
  let borrowList = [];
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < idList.length; j++) {
      let idCheck = idList[j].id;

      if (idCheck == accounts[i].id) {
        accounts[i].returned = idList[j].returned;
        borrowList.push(accounts[i]);

        break;
      }
    }
  }
  return borrowList;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
