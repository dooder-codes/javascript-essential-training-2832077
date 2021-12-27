class Book {
  constructor(
    author = "Eric",
    title = "Secrets 2 Success",
    pubYear,
    currentPage,
    readStatus
  ) {
    this.author = author;
    this.title = title;
    this.pubYear = pubYear;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }
    updateReadStatus(newCurrentPage) {
        this.currentPage = newCurrentPage;
  }
}
export default Book;
