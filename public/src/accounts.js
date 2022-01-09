// Done
function findAccountById(accounts, id) {
  return accounts.find((acc) => acc.id === id);
}
//Done
function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) =>
    accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1
  );
}
//Done
function getTotalNumberOfBorrows(account, books) {
  let accumulator = 0;
  return books.reduce((acc, book) => {
    let borrowed = 0;
    acc += book.borrows.reduce((borrows, borrow) => 
    borrows += borrow.id === account.id ? 1 : 0, borrowed);
    return acc;
  }, accumulator);
}

//Done
function getBooksPossessedByAccount(account, books, authors) {
  let borrows = books.filter((book) => book.borrows[0].id === account.id);
  return borrows.map((borrow) => {
    let author = authors.find((author) => author.id === borrow.authorId);
    return {
      id: borrow.id,
      title: borrow.title,
      genre: borrow.genre,
      authorId: borrow.authorId,
      author: author,
      borrows: borrow.borrows,
    };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
