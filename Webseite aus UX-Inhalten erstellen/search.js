// Search functionality for UX Literature Website

document.addEventListener('DOMContentLoaded', function() {
    // Get search form and input elements
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm && searchInput) {
        // Add event listener for search form submission
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                return;
            }
            
            // Create search results page URL
            const currentPath = window.location.pathname;
            let searchUrl;
            
            // Determine correct path for search results page based on current location
            if (currentPath.includes('/pages/')) {
                if (currentPath.includes('/books/') || currentPath.includes('/categories/') || currentPath.includes('/lists/')) {
                    searchUrl = '../../pages/search-results.html';
                } else {
                    searchUrl = '../pages/search-results.html';
                }
            } else {
                searchUrl = 'pages/search-results.html';
            }
            
            // Redirect to search results page with query parameter
            window.location.href = `${searchUrl}?q=${encodeURIComponent(searchTerm)}`;
        });
    }
    
    // Handle search results page functionality
    const searchResultsContainer = document.querySelector('#search-results');
    if (searchResultsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');
        
        if (searchQuery) {
            // Display search query
            const searchQueryElement = document.querySelector('#search-query');
            if (searchQueryElement) {
                searchQueryElement.textContent = searchQuery;
            }
            
            // Load and display search results
            loadSearchResults(searchQuery);
        }
    }
    
    // Function to load search results from books.json
    function loadSearchResults(query) {
        // Determine correct path for books.json based on current location
        const currentPath = window.location.pathname;
        let dataPath;
        
        if (currentPath.includes('/pages/')) {
            dataPath = '../data/books.json';
        } else {
            dataPath = 'data/books.json';
        }
        
        fetch(dataPath)
            .then(response => response.json())
            .then(books => {
                const results = books.filter(book => {
                    const searchableText = [
                        book.title,
                        book.author,
                        book.categoryName,
                        book.description,
                        ...(book.keyTopics || [])
                    ].join(' ').toLowerCase();
                    
                    return searchableText.includes(query.toLowerCase());
                });
                
                displaySearchResults(results, query);
            })
            .catch(error => {
                console.error('Error loading search results:', error);
                if (searchResultsContainer) {
                    searchResultsContainer.innerHTML = '<p>Fehler beim Laden der Suchergebnisse. Bitte versuchen Sie es später erneut.</p>';
                }
            });
    }
    
    // Function to display search results
    function displaySearchResults(results, query) {
        if (!searchResultsContainer) return;
        
        if (results.length === 0) {
            searchResultsContainer.innerHTML = `
                <p>Keine Ergebnisse gefunden für "<strong>${query}</strong>". Bitte versuchen Sie einen anderen Suchbegriff.</p>
                <div class="search-suggestions">
                    <h3>Vorschläge:</h3>
                    <ul>
                        <li>Überprüfen Sie die Rechtschreibung</li>
                        <li>Verwenden Sie allgemeinere Begriffe</li>
                        <li>Versuchen Sie verwandte Begriffe</li>
                        <li>Durchsuchen Sie die <a href="../categories.html">Kategorien</a> manuell</li>
                    </ul>
                </div>
            `;
            return;
        }
        
        // Determine correct path for book pages based on current location
        const currentPath = window.location.pathname;
        let bookPath;
        
        if (currentPath.includes('/pages/')) {
            bookPath = 'books/';
        } else {
            bookPath = 'pages/books/';
        }
        
        let html = `<p>Gefunden: <strong>${results.length}</strong> Ergebnisse für "<strong>${query}</strong>"</p>`;
        html += '<div class="book-grid">';
        
        results.forEach(book => {
            // Ensure cover path is correct
            let coverPath = book.cover;
            if (currentPath.includes('/pages/')) {
                coverPath = '..' + coverPath;
            }
            
            html += `
                <div class="book-card" data-category="${book.category}">
                    <div class="book-card-image">
                        <img src="${coverPath}" alt="${book.title} Cover">
                    </div>
                    <div class="book-card-content">
                        <span class="book-card-category">${book.categoryName}</span>
                        <h3><a href="${bookPath}${book.slug}.html">${book.title}</a></h3>
                        <p class="book-card-author">${book.author}</p>
                        <div class="book-card-rating">
                            <span class="stars">${getStarRating(book.rating)}</span>
                            <span>${book.rating}/5 (${book.reviews} Bewertungen)</span>
                        </div>
                        <p>${book.description}</p>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        searchResultsContainer.innerHTML = html;
    }
    
    // Helper function to generate star rating HTML
    function getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let stars = '';
        
        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars += '★';
        }
        
        // Add half star if needed
        if (halfStar) {
            stars += '★';
        }
        
        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars += '☆';
        }
        
        return stars;
    }
});
