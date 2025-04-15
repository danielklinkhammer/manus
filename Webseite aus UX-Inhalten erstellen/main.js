// Main JavaScript for UX Literature Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const expanded = mainNav.classList.contains('active');
            mobileNavToggle.setAttribute('aria-expanded', expanded);
        });
    }
    
    // Book category filtering
    const categoryFilters = document.querySelectorAll('.category-filter');
    const bookCards = document.querySelectorAll('.book-card');
    
    if (categoryFilters.length > 0 && bookCards.length > 0) {
        categoryFilters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all filters
                categoryFilters.forEach(f => f.classList.remove('active'));
                
                // Add active class to clicked filter
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Show all books if "all" category is selected
                if (category === 'all') {
                    bookCards.forEach(card => {
                        card.style.display = 'block';
                    });
                } else {
                    // Show only books in the selected category
                    bookCards.forEach(card => {
                        if (card.getAttribute('data-category') === category) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add active class to current navigation item
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPage.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentPage === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
    
    // Initialize book search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                return;
            }
            
            // Redirect to search results page with query parameter
            window.location.href = `/pages/search-results.html?q=${encodeURIComponent(searchTerm)}`;
        });
    }
    
    // Load search results if on search page
    const searchResultsContainer = document.querySelector('#search-results');
    if (searchResultsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');
        
        if (searchQuery) {
            document.querySelector('#search-query').textContent = searchQuery;
            loadSearchResults(searchQuery);
        }
    }
    
    // Function to load search results
    function loadSearchResults(query) {
        // In a real implementation, this would fetch results from a backend
        // For this demo, we'll simulate by filtering the books data
        fetch('/data/books.json')
            .then(response => response.json())
            .then(books => {
                const results = books.filter(book => {
                    return book.title.toLowerCase().includes(query.toLowerCase()) ||
                           book.author.toLowerCase().includes(query.toLowerCase()) ||
                           book.description.toLowerCase().includes(query.toLowerCase()) ||
                           book.category.toLowerCase().includes(query.toLowerCase());
                });
                
                displaySearchResults(results);
            })
            .catch(error => {
                console.error('Error loading search results:', error);
                searchResultsContainer.innerHTML = '<p>Error loading search results. Please try again.</p>';
            });
    }
    
    // Function to display search results
    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResultsContainer.innerHTML = '<p>No results found. Please try a different search term.</p>';
            return;
        }
        
        let html = '<div class="book-grid">';
        
        results.forEach(book => {
            html += `
                <div class="book-card" data-category="${book.category}">
                    <div class="book-card-image">
                        <img src="${book.cover}" alt="${book.title} cover">
                    </div>
                    <div class="book-card-content">
                        <span class="book-card-category">${book.category}</span>
                        <h3><a href="/pages/books/${book.slug}.html">${book.title}</a></h3>
                        <p class="book-card-author">${book.author}</p>
                        <div class="book-card-rating">
                            <span class="stars">${getStarRating(book.rating)}</span>
                            <span>${book.rating}/5 (${book.reviews} reviews)</span>
                        </div>
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
