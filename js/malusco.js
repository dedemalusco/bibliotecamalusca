// Lista de livros na biblioteca

const bookStatus = document.getElementById("bookStatus").value;
var totalBooksAdded = 0;
var totalBooksBorrowed = 0;
var library = JSON.parse(localStorage.getItem("books")) || []; // Usamos localStorage
var bookGroups = {}; // Agrupar livros com o mesmo nome e data de adição
var borrowerGroups = {}; // Agrupar empréstimos para a mesma pessoa

document.addEventListener("DOMContentLoaded", function() {
    listBooks();
});
var selectedBookTitle = ""; // Variável para armazenar o título do livro selecionado
document.addEventListener("DOMContentLoaded", function() {
    listBooks();
});

const book = library.find(book => book.title === title);
function editSelectedBooks() {   const borrowerName = document.getElementById("borrowerName").value;
const dueDate = document.getElementById("dueDate").value;

selectedBooks.forEach(title => {
    updateBookbookStatus(title, "emprestado", borrowerName, dueDate);
});

// Limpar livros selecionados após edição
selectedBooks = [];
toggleSaveChangesButton();
}
function getbookStatus() {
    return document.getElementById("bookStatus").value;
}
function addBook() {
    const title = document.getElementById("title").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const bookStatus = document.getElementById("bookStatus").value;
    const borrower = document.getElementById("borrowerName").value;
    const dueDate = document.getElementById("dueDate").value;

    // Verifica se o livro com o mesmo título já existe
    const existingBook = library.find(book => book.title === title);

    if (existingBook) {
            existingBook.available = bookStatus === "disponivel";
            existingBook.borrower = bookStatus === "disponivel" ? "" : borrower;
            existingBook.dueDate = bookStatus === "disponivel" ? "" : dueDate;
        // Atualize as informações do livro existente
        if (bookStatus === "disponivel") {
            existingBook.borrower = borrower;
            existingBook.dueDate = dueDate;
        } else {
            alert("Livro já existe como emprestado.");
        }
    } else {
        // Caso contrário, adicione um novo livro
        for (let i = 0; i < quantity; i++) {
            const bookInfo = {
                title,
                available: bookStatus === "disponivel",
                borrower: bookStatus === "disponivel" ? "" : borrower,
                dueDate: bookStatus === "disponivel" ? "" : dueDate,
            };
            library.push(bookInfo);
            
            alert("Livro Adicionado Com Sucesso.");
        }
    }

    updateLocalStorage();
    listBooks();
}

function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(library));
}
function changeBookbookStatus() {
    const book = library.find(book => book.title === title);

    if (book) {
        // Verifica se o livro está emprestado antes de alterar o status
        if (!book.available) {
            book.available = true;
            book.borrower = "";
            book.dueDate = "";

            // Atualize o localStorage após a mudança de status
            updateLocalStorage();

            // Atualize a lista de livros na página
            listBooks();
        }
    }
}

function listBooks() {
    const booksContainer = document.getElementById("booksContainer");
    booksContainer.innerHTML = "";

    if (library.length === 0) {
        booksContainer.innerHTML = "Nenhum livro cadastrado.";
    } else {
        library.forEach((book, index) => {
            const bookStatus = book.available
                ? "Disponível"
                : `Emprestado para ${book.borrower} (Devolução: ${book.dueDate})`;

            const changeStatusButton = book.available
            ? ""
            : ``;

            booksContainer.innerHTML += `<p>${book.title} - ${bookStatus} ${changeStatusButton}</p>`;
        });
    }}

    function searchBooks() {
        var resultDiv = document.getElementById("resultDiv");    resultDiv.style.display = "block";
    isResultDivVisible = true;

        // Obter o valor do campo de entrada
        const searchInput = document.getElementById("searchInput");
        const searchTerm = searchInput.value.toLowerCase();
    
        // Fazer a pesquisa na sua lista de livros (variável library)
        const foundBooks = library.filter(book => book.title && book.title.toLowerCase().includes(searchTerm)); // Verificar se 'book' e 'title' existem
    
        console.log("Termo de pesquisa:", searchTerm);
        console.log("Número de livros encontrados:", foundBooks.length);
    
        // Exibir os resultados
        var resultDiv = document.getElementById("resultDiv");
        resultDiv.innerHTML = "Livros Encontrados:<br>";
    
        if (foundBooks.length > 0) {
            foundBooks.forEach(book => {
                console.log(`${book.title} - ${book.available ? "Disponível" : "Emprestado para " + book.borrower + " (Devolução: " + book.dueDate + ")"}`);
                resultDiv.innerHTML += `${book.title} - ${book.available ? "Disponível" : "Emprestado para " + book.borrower + " (Devolução: " + book.dueDate + ")"}<br>`;
            });
        } else {
            resultDiv.innerHTML += "Nenhum livro encontrado.";
        }
    }
    

function listGroupedBooks() {
    const booksContainer = document.getElementById("booksContainer");
    booksContainer.innerHTML = "";

    for (const key in bookGroups) {
        const group = bookGroups[key];
        const bookbookStatus = group.available ? "Disponível" : `Emprestado para ${group.borrower} (Devolução: ${group.dueDate})`;
        booksContainer.innerHTML += `<p>${group.title} (${group.count} livros) - ${bookbookStatus}</p>`;
    }}
function addBookToGroup(title, addedDate, available, borrower, dueDate) {
    const key = `${title}_${addedDate}`;
    if (bookGroups[key]) {
        bookGroups[key].count++;
        if (!available) {
            bookGroups[key].available = false;
            bookGroups[key].borrower = borrower;
            bookGroups[key].dueDate = dueDate;
        }
    } else {
        bookGroups[key] = {
            title,
            addedDate,
            count: 1,
            available,
            borrower: available ? "" : borrower,
            dueDate: available ? "" : dueDate,
        };
    }
}

function addBorrowedBookToGroup(title, borrower) {
    if (borrowerGroups[borrower]) {
        borrowerGroups[borrower].books.push(title);
    } else {
        borrowerGroups[borrower] = { borrower, books: [title] };
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const newBookButton = document.getElementById("newBookButton");
    const formContainer = document.createElement("div");
    let formVisible = false;

    newBookButton.addEventListener("click", function() {
        if (!formVisible) {



            // Anexa o formulário ao documento
            document.body.appendChild(formContainer);

            formVisible = true;
        } else {
            // Esconde o formulário
            formContainer.innerHTML = ""; // Limpa os campos
            formVisible = false;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    listBooks();
});

document.addEventListener("DOMContentLoaded", function() {
    const newBookButton = document.getElementById("newBookButton");
    const addBookForm = document.getElementById("addBookForm");

    newBookButton.addEventListener("click", function() {
        if (addBookForm.style.display === "none" || addBookForm.style.display === "") {
            addBookForm.style.display = "block";
        } else {
            addBookForm.style.display = "none";
        }
    });
});

function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(library));
}
function addOrUpdateBook() {
    const title = document.getElementById("title").value;
    const bookStatus = getbookStatus();
    const borrower = document.getElementById("borrowerName").value;
    const dueDate = document.getElementById("dueDate").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    const existingBooks = library.filter(book => book.title === title);

    if (existingBooks.length === 0) {
        for (let i = 0; i < quantity; i++) {
            const newBook = {
                title,
                available: bookStatus === "disponivel",
                borrower: bookStatus === "disponivel" ? "" : borrower,
                dueDate: bookStatus === "disponivel" ? "" : dueDate,
            };
            library.push(newBook);
        }
    } else {
        const totalBooksToUpdate = existingBooks.length * quantity;
        const confirmUpdate = confirm(`Você deseja atualizar os ${totalBooksToUpdate} livros com o mesmo título?`);

        if (confirmUpdate) {
            // Atualizar apenas a quantidade especificada
            existingBooks.slice(0, quantity).forEach(book => {
                book.available = bookStatus === "disponivel";
                book.borrower = bookStatus === "disponivel" ? "" : borrower;
                book.dueDate = bookStatus === "disponivel" ? "" : dueDate;
            });
        } else {
            for (let i = 0; i < quantity; i++) {
                const newBook = {
                    title,
                    available: bookStatus === "disponivel",
                    borrower: bookStatus === "disponivel" ? "" : borrower,
                    dueDate: bookStatus === "disponivel" ? "" : dueDate,
                };
                library.push(newBook);
            }
        }
    }

    updateLocalStorage();
    listBooks();
}

let isResultDivVisible = false;

function toggleResultDiv() {
    
    var resultDiv = document.getElementById("resultDiv");

    if (isResultDivVisible) {
        resultDiv.style.display = "none";
    } else {
        resultDiv.style.display = "block";
    }

    isResultDivVisible = !isResultDivVisible;
};
    updateLocalStorage(); // Atualize o localStorage após adicionar ou editar um livro
    listGroupedBooks(); // Atualize a lista de livros agrupados
    listBooks(); // Atualize a lista de livros na página}
function updateBookbookStatus(title, bookStatus, borrower, dueDate) {
    const book = library.find(book => book.title === title);
    if (book) {
        book.available = bookStatus === "disponivel";
        book.borrower = borrower;
        book.dueDate = dueDate;
    }
    updateLocalStorage();
    listBooks();}

// ...

// Você pode adicionar o código abaixo nos eventos que exibem a lista de livros
document.getElementById("newBookButton").addEventListener("click", function() {
    listBooks();
});

function groupBooksByNameAndBorrower(books) {
    const groupedBooks = {};

    books.forEach(book => {
        const key = `${book.title}_${book.borrower}`;
        if (groupedBooks[key]) {
            groupedBooks[key].count++;
        } else {
            groupedBooks[key] = { title: book.title, borrower: book.borrower, available: book.available, dueDate: book.dueDate, count: 1 };
        }
    });

    return groupedBooks;
}
function modifyBorrowedBooks() {
    const borrowedBooks = library.filter(book => !book.available);

    if (borrowedBooks.length === 0) {
        alert("Nenhum livro emprestado disponível para atualização.");
        return;
    }

    const title = prompt("Informe o título do livro emprestado que deseja atualizar:");

    if (!title) {
        alert("Título inválido.");
        return;
    }

    const booksToUpdate = borrowedBooks.filter(book => book.title === title);

    if (booksToUpdate.length === 0) {
        alert("Nenhum livro emprestado com o título informado.");
    } else {
        const bookStatus = getBookStatus();
        const borrower = document.getElementById("borrowerName").value;
        const dueDate = document.getElementById("dueDate").value;

        booksToUpdate.forEach(book => {
            book.available = bookStatus === "disponivel";
            book.borrower = bookStatus === "disponivel" ? "" : borrower;
            book.dueDate = bookStatus === "disponivel" ? "" : dueDate;
        });

        alert(`Livros emprestados com o título "${title}" atualizados com sucesso.`);
    }

    updateLocalStorage();
    listBooks();
}

// Modificar os livros emprestados


function removeBook(title) {
    const bookIndex = library.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
        library.splice(bookIndex, 1);
        updateLocalStorage();
        listBooks();
    }
}

function changebookStatus() {
    const title = selectedBookTitle; // Use a variável selectedBookTitle para obter o título do livro selecionado
    const book = library.find(book => book.title === title);

    if (book) {
        // Verifica se o livro está emprestado antes de alterar o status
        if (!book.available) {
            book.available = true;
            book.borrower = "";
            book.dueDate = "";

            // Atualize o localStorage após a mudança de status
            updateLocalStorage();

            // Atualize a lista de livros na página
            listBooks();
        }
    }
}

function editBookbookStatus(title, currentbookStatus) {
    const newbookStatus = !currentbookStatus;
    const book = library.find(book => book.title === title);

    if (book) {
        book.available = newbookStatus;
        listBooks(); // Atualize a lista de livros após a edição
    }
}

function showAvailableBooks() {
    listBooks();
    var resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = "Livros Disponíveis:\n";

    const availableBooks = library.filter(book => book.available);

    if (availableBooks.length === 0) {
        resultDiv.innerHTML += "Nenhum livro disponível no momento.";
    } else {
        availableBooks.forEach(book => {
            resultDiv.innerHTML += `${book.title} - Disponível\n`;
        });
    }
    
}

function showBorrowedBooks() {
    listBooks();
    const resultDiv = document.getElementById("resultDiv");
    if (resultDiv) {
        resultDiv.innerHTML = "Livros Emprestados:\n";

        const borrowedBooks = library.filter(book => !book.available);

        if (borrowedBooks.length === 0) {
            resultDiv.innerHTML += "Nenhum livro emprestado no momento.";
        } else {
            borrowedBooks.forEach(book => {
                resultDiv.innerHTML += `${book.title} - Emprestado para ${book.borrower} (Devolução: ${book.dueDate})\n`;
            });
        }
    }
}

function showAddBookForm() {
    listBooks();
    const addBookForm = document.getElementById("addBookForm");
    addBookForm.style.display = "block";
    const borrowBookDiv = document.querySelector(".borrow-book");
    borrowBookDiv.style.display = "none"; // Oculte o botão de empréstimo ao mostrar o formulário de adição
}

// Função para emprestar um livro



// Função para adicionar um livro ao armazenamento local
function addBookToStorage(title, available, borrowedDate, borrower, dueDate) {
    // Recupere os livros já existentes do armazenamento local
    const existingBooks = JSON.parse(localStorage.getItem("books")) || [];

    // Adicione o novo livro à lista
    existingBooks.push({ title, available, borrowedDate, borrower, dueDate });

    // Salve a lista atualizada de livros de volta no armazenamento local
    localStorage.setItem("books", JSON.stringify(existingBooks));

    // Atualize a variável library com os dados do localStorage
    library = existingBooks;
}

// Função para adicionar um livro

function showBorrowButton(title) {
    listBooks();
    const borrowBookDiv = document.querySelector(".borrow-book");
    borrowBookDiv.style.display = "block";

    // Atualize o título do livro no botão de empréstimo
    document.getElementById("selectedBookTitle").innerText = title;
}

function borrowSelectedBook() {
    const selectedBookTitle = document.getElementById("selectedBookTitle").innerText;
    const selectedBook = library.find(book => book.title === selectedBookTitle);

    if (selectedBook && selectedBook.available) {
        selectedBook.available = false;
        selectedBook.borrower = document.getElementById("borrowerName").value;
        selectedBook.dueDate = document.getElementById("dueDate").value;

        // Atualize a contagem total de empréstimos
        totalBooksBorrowed++;

        // Adicione o empréstimo ao grupo correto
        addBorrowedBookToGroup(selectedBook.title, selectedBook.borrower);

        // Atualize a lista de livros na página
        listBooks();
        addBookToGroup(selectedBook.title, selectedBook.addedDate, false, selectedBook.borrower, selectedBook.dueDate);

        alert(`Livro "${selectedBook.title}" emprestado para ${selectedBook.borrower} até ${selectedBook.dueDate}.`);
    } else {
        alert("Livro não disponível para empréstimo.");
    }
}
var selectedBooks = []; // Array para armazenar livros selecionados para edição

function updateBookbookStatus(title, bookStatus) {
    listBooks();
    const book = library.find(book => book.title === title);
    if (book) {
        book.available = bookStatus === "disponivel";
    }
}

function selectBookForEdit(title) {
    selectedBookTitle = library[index].title;
    document.getElementById("changebookStatusButton").style.display = "block";
}

function toggleSaveChangesButton() {
    listBooks();
    const saveChangesButton = document.querySelector(".save-changes");
    if (selectedBooks.length > 0) {
        saveChangesButton.style.display = "block";
    } else {
        saveChangesButton.style.display = "none";
    }
}

function saveChanges() {
    const borrowerName = document.getElementById("borrowerName").value;
    const dueDate = document.getElementById("dueDate").value;
    
    selectedBooks.forEach(title => {
        updateBookbookStatus(title, "disponivel");
        const book = library.find(book => book.title === title);
        if (book) {
            book.borrower = borrowerName;
            book.dueDate = dueDate;
        }
    });

    // Clear selected books and hide save changes button
    selectedBooks = [];
    toggleSaveChangesButton();

    // Refresh the displayed book list
    listBooks();
}
function showAvailableBooks() {
    const booksContainer = document.getElementById("booksContainer");
    booksContainer.innerHTML = "";

    const availableBooks = library.filter(book => book.available);

    if (availableBooks.length === 0) {
        booksContainer.innerHTML = "Nenhum livro disponível no momento.";
    } else {
        availableBooks.forEach(book => {
            booksContainer.innerHTML += `<p>${book.title} - Disponível</p>`;
        });
    }

    booksContainer.style.display = "block"; // Exibe a lista de livros disponíveis
}

function showBorrowedBooks() {
    const booksContainer = document.getElementById("booksContainer");
    booksContainer.innerHTML = "";

    const borrowedBooks = library.filter(book => !book.available);

    if (borrowedBooks.length === 0) {
        booksContainer.innerHTML = "Nenhum livro emprestado no momento.";
    } else {
        borrowedBooks.forEach(book => {
            booksContainer.innerHTML += `<p>${book.title} - Emprestado para ${book.borrower} (Devolução: ${book.dueDate})</p>`;
        });
    }

    booksContainer.style.display = "block";
}
function showDeleteBooks() {
    const booksContainer = document.getElementById("booksContainer");
    const availableBooks = library.filter(book => book.available);

    if (availableBooks.length === 0) {
        alert("Nenhum livro disponível para exclusão.");
    } else {
        const deleteBookButton = document.getElementById("deleteBookButton");
        deleteBookButton.style.display = "block";

        booksContainer.innerHTML = "";
        availableBooks.forEach(book => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = book.title;
            checkbox.name = "bookToDelete";

            booksContainer.appendChild(checkbox);
            booksContainer.innerHTML += `<label>${book.title} - Disponível</label><br>`;
        });
    }
}

function deleteBook(index) {
    listBooks(); // Atualize a lista de livros

    // Exiba um botão "Excluir Selecionados" e um botão "Cancelar"
    const deleteSelectedButton = document.getElementById("deleteSelectedButton");
    deleteSelectedButton.style.display = "block";
    // Adicione checkboxes para cada livro
    const booksContainer = document.getElementById("booksContainer");
    booksContainer.querySelectorAll("p").forEach((bookElement, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "bookToDelete";
        checkbox.value = index;
        bookElement.appendChild(checkbox);
    });

}

// Função para excluir livros selecionados
function deleteSelectedBooks() {
    // Obtenha todos os checkboxes marcados
    const checkboxes = document.querySelectorAll("input[name='bookToDelete']:checked");
    
    // Remova os livros selecionados da biblioteca
    checkboxes.forEach(checkbox => {
        const index = parseInt(checkbox.value);
        if (!isNaN(index) && index >= 0 && index < library.length) {
            library.splice(index, 1);
        }
    });

    // Atualize o localStorage e a lista de livros
    updateLocalStorage();
    listBooks();
}
console.log("bookStatus:", bookStatus); 
