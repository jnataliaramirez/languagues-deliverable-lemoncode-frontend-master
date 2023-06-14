console.log("************** DELIVERABLE 04 *********************");

// --- Types
interface Books {
  title: string;
  isRead: boolean;
}

interface IsBookRead {
  (books: Books[], titleToSearch: string): boolean;
}

// --- Datos
const books: Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

// * Función isBookRead

const isBookRead: IsBookRead = (books, titleToSearch) =>
  books.some((item) => (item.title === titleToSearch ? item.isRead : false));

// * --> Consola
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
