interface BooksPractice {
  title: string;
  isRead: boolean;
};

const booksPractice : BooksPractice[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookReadPractice = (books : BooksPractice[], titleTosearch: string) : boolean => {
  const isBook = books.find(book => book.title === titleTosearch)
  return isBook ? isBook.isRead : false;
}


console.log(isBookReadPractice(booksPractice, "Devastación")); // true
console.log(isBookReadPractice(booksPractice, "Canción de hielo y fuego")); // false
console.log(isBookReadPractice(booksPractice, "Los Pilares de la Tierra")); // false