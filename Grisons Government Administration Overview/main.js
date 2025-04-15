// Authentication check for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Skip authentication check for login page
    if (window.location.pathname.includes('login.html')) {
        return;
    }
    
    // Check if authenticated
    const isAuthenticated = localStorage.getItem('grch_authenticated');
    if (isAuthenticated !== 'true') {
        // Redirect to login page
        window.location.href = 'login.html';
    }
});

// Main JavaScript for gr.ch CMS-Migrationsanalyse website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
    
    // Generate table of contents
    const tocList = document.querySelector('.toc-list');
    const markdownContent = document.querySelector('.markdown-content');
    
    if (tocList && markdownContent) {
        const headings = markdownContent.querySelectorAll('h2, h3');
        
        headings.forEach(heading => {
            if (!heading.id) {
                // If heading doesn't have an ID, skip it
                return;
            }
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            
            // Add indentation for h3 elements
            if (heading.tagName.toLowerCase() === 'h3') {
                listItem.style.paddingLeft = '1rem';
            }
            
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-link, .sidebar-nav-link, .footer-nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Responsive image handling
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // If image fails to load, add a placeholder class
            this.classList.add('img-placeholder');
            this.alt = 'Bild konnte nicht geladen werden';
        });
    });
    
    // Add responsive table handling
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('table-responsive');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
    
    // Add logout functionality
    const logoutLinks = document.querySelectorAll('.logout-link');
    
    logoutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('grch_authenticated');
            window.location.href = 'login.html';
        });
    });
});

// Add CSS for responsive tables
if (!document.querySelector('#responsive-table-styles')) {
    const style = document.createElement('style');
    style.id = 'responsive-table-styles';
    style.textContent = `
        .table-responsive {
            overflow-x: auto;
            margin-bottom: 1rem;
        }
        
        .img-placeholder {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100px;
            color: #6c757d;
        }
        
        @media (max-width: 768px) {
            table {
                font-size: 0.875rem;
            }
        }
    `;
    document.head.appendChild(style);
}
