// Done
function getTotalBooksCount(books) {
  return books.length;
}
// Done
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
// Done
function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length;
}

// Helper Function to getMostCommonGenres.
// Supplies it with a sorted Array containing every genre and its count in its own array
function sortedArray(books) {
  let genreCount = books.map((book) => book.genre);
  result = {};
  for (var i = 0; i < genreCount.length; ++i) {
    if (!result[genreCount[i]]) result[genreCount[i]] = 0;
    ++result[genreCount[i]];
  }

  let sortable = [];
  for (let book in result) {
    sortable.push([book, result[book]]);
  }
  sortable.sort((a, b) => b[1] - a[1]);

  return sortable;
}
// Done
function getMostCommonGenres(books) {
  let sorted = sortedArray(books);

  let trimmed = [];
  for (let i = 0; i < 5; i++) {
    trimmed.push({ name: sorted[i][0], count: sorted[i][1] });
  }

  return trimmed;
}

function sortedPopularArray(books) {
  let bookCount = books.map((book) => [book.title, book.borrows.length]);
  // console.log(bookCount)
  let sorted = bookCount.sort((a, b) => b[1] - a[1]);

  return sorted;
}
// console.log(sortedArray(books))

function getMostPopularBooks(books) {
  let sorted = sortedPopularArray(books);

  let trimmed = [];
  for (let i = 0; i < 5; i++) {
    trimmed.push({ name: sorted[i][0], count: sorted[i][1] });
  }

  return trimmed;
}
// Done
function getMostPopularAuthors(books, authors) {
  let array = [];

  books.forEach((book) => {
    let authorName = findAuthorById(authors, book.authorId).name;
    let numBorrows = book.borrows.length;

    let found = false;
    array.forEach((author) => {
      if (author.name === authorName) {
        author.count += numBorrows;
        found = true;
        return;
      }
    });

    if (!found) {
      array.push(
        createObject(authorName.first + " " + authorName.last, numBorrows)
      );
    }
  });

  array.sort((authorA, authorB) => (authorA.count > authorB.count ? -1 : 1));
  let final = [];
  for (let i = 0; i < 5; i++) {
    final.push(array[i]);
  }

  return final;
}
// two helper functions for getMostPopularAuthors
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
function createObject(name, count) {
  return {
    name: name,
    count: count,
  };
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
