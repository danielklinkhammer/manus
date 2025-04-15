// Enhanced navigation functionality for UX Literature Website

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
    
    // Add skip to content link for accessibility
    const body = document.querySelector('body');
    const mainContent = document.querySelector('main');
    
    if (body && mainContent) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-to-content';
        skipLink.textContent = 'Zum Inhalt springen';
        body.insertBefore(skipLink, body.firstChild);
        
        mainContent.setAttribute('id', 'main-content');
        mainContent.setAttribute('tabindex', '-1');
    }
    
    // Add back to top button
    const backToTopButton = document.createElement('a');
    backToTopButton.href = '#';
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Zurück nach oben');
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when back to top button is clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add breadcrumbs to pages
    const pageTitle = document.querySelector('h1');
    if (pageTitle && !document.querySelector('.breadcrumbs')) {
        const currentPath = window.location.pathname;
        let breadcrumbsHtml = '<div class="breadcrumbs">';
        
        // Determine home link path based on current location
        let homePath = '';
        if (currentPath.includes('/pages/')) {
            if (currentPath.includes('/books/') || currentPath.includes('/categories/') || currentPath.includes('/lists/')) {
                homePath = '../../';
            } else {
                homePath = '../';
            }
        }
        
        breadcrumbsHtml += `<a href="${homePath}index.html">Startseite</a>`;
        
        // Add category or section if applicable
        if (currentPath.includes('/books/')) {
            breadcrumbsHtml += '<span class="separator">›</span><a href="../categories.html">Kategorien</a>';
        } else if (currentPath.includes('/categories/')) {
            breadcrumbsHtml += '<span class="separator">›</span><a href="../categories.html">Kategorien</a>';
        } else if (currentPath.includes('/lists/')) {
            breadcrumbsHtml += '<span class="separator">›</span><a href="../lists/beginners.html">Listen</a>';
        }
        
        // Add current page
        breadcrumbsHtml += `<span class="separator">›</span><span class="current">${pageTitle.textContent}</span>`;
        breadcrumbsHtml += '</div>';
        
        // Insert breadcrumbs before the main content
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.insertAdjacentHTML('afterbegin', breadcrumbsHtml);
        }
    }
    
    // Add table of contents to book detail pages
    const bookSections = document.querySelectorAll('.book-section');
    if (bookSections.length > 0) {
        const bookDetailContent = document.querySelector('.book-detail-content');
        if (bookDetailContent) {
            let tocHtml = '<div class="table-of-contents"><h3>Inhaltsverzeichnis</h3><ul>';
            
            bookSections.forEach((section, index) => {
                const sectionTitle = section.querySelector('h2');
                if (sectionTitle) {
                    const sectionId = `section-${index}`;
                    section.setAttribute('id', sectionId);
                    tocHtml += `<li><a href="#${sectionId}">${sectionTitle.textContent}</a></li>`;
                }
            });
            
            tocHtml += '</ul></div>';
            
            // Insert TOC after book meta information
            const bookMeta = document.querySelector('.book-meta');
            if (bookMeta) {
                bookMeta.insertAdjacentHTML('afterend', tocHtml);
            }
        }
    }
    
    // Add category filters to category pages
    const bookGrid = document.querySelector('.book-grid');
    if (bookGrid && !document.querySelector('.category-filters')) {
        // Get all unique categories from book cards
        const bookCards = document.querySelectorAll('.book-card');
        const categories = new Set();
        
        bookCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (category) {
                categories.add(category);
            }
        });
        
        // Only add filters if there are multiple categories
        if (categories.size > 1) {
            let filtersHtml = '<div class="category-filters">';
            filtersHtml += '<a href="#" class="category-filter active" data-category="all">Alle anzeigen</a>';
            
            categories.forEach(category => {
                let categoryName = '';
                switch(category) {
                    case 'grundprinzipien':
                        categoryName = 'Grundprinzipien';
                        break;
                    case 'psychologie':
                        categoryName = 'Psychologie';
                        break;
                    case 'forschung':
                        categoryName = 'Forschungsmethoden';
                        break;
                    case 'interface':
                        categoryName = 'Interface-Design';
                        break;
                    case 'produkt':
                        categoryName = 'Produktdesign';
                        break;
                    case 'interaktion':
                        categoryName = 'Interaktionsdesign';
                        break;
                    case 'praktisch':
                        categoryName = 'Praktische Anleitungen';
                        break;
                    case 'referenz':
                        categoryName = 'Referenzwerke';
                        break;
                    default:
                        categoryName = category;
                }
                
                filtersHtml += `<a href="#" class="category-filter" data-category="${category}">${categoryName}</a>`;
            });
            
            filtersHtml += '</div>';
            
            // Insert filters before book grid
            bookGrid.insertAdjacentHTML('beforebegin', filtersHtml);
            
            // Add event listeners to filters
            const filters = document.querySelectorAll('.category-filter');
            filters.forEach(filter => {
                filter.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all filters
                    filters.forEach(f => f.classList.remove('active'));
                    
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
    }
    
    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Handle different directory levels
        let normalizedLinkPath = linkPath;
        if (linkPath.includes('../')) {
            normalizedLinkPath = linkPath.split('../').pop();
        }
        
        let normalizedCurrentPath = currentPath;
        if (currentPath.includes('/pages/')) {
            normalizedCurrentPath = currentPath.split('/pages/').pop();
        }
        
        if (normalizedCurrentPath.includes(normalizedLinkPath) && normalizedLinkPath !== 'index.html') {
            link.classList.add('active');
        } else if (normalizedCurrentPath === '/' && normalizedLinkPath === 'index.html') {
            link.classList.add('active');
        }
    });
});
