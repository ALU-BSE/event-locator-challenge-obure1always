// Events Page JavaScript

let currentViewMode = 'grid';
let filteredEvents = [];

// Get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        search: params.get('search') || '',
        date: params.get('date') || '',
        category: params.get('category') || ''
    };
}

// Load and display events
function loadEvents() {
    const container = document.getElementById('eventsContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!container) return;
    
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    container.style.display = 'none';
    noResults.style.display = 'none';
    
    // Simulate loading delay
    setTimeout(() => {
        const params = getUrlParams();
        
        // Filter events based on URL parameters
        filteredEvents = EventLocator.filterEvents(
            EventLocator.eventsData,
            params.search,
            params.date,
            params.category
        );
        
        // Update filter inputs with URL parameters
        updateFilterInputs(params);
        
        // Display events
        displayEvents(filteredEvents);
        
        // Update results count
        updateResultsCount(filteredEvents.length);
        
        // Hide loading spinner
        loadingSpinner.style.display = 'none';
        container.style.display = 'block';
        
        // Show no results message if needed
        if (filteredEvents.length === 0) {
            noResults.style.display = 'block';
        }
    }, 500);
}

// Display events in the container
function displayEvents(events) {
    const container = document.getElementById('eventsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    container.className = `row ${currentViewMode === 'list' ? 'list-view' : 'grid-view'}`;
    
    if (events.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search display-1 text-muted"></i>
                <h3 class="mt-3">No events found</h3>
                <p class="text-muted">Try adjusting your search criteria or browse all events.</p>
                <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }
    
    events.forEach(event => {
        const card = EventLocator.createEventCard(event, currentViewMode);
        container.appendChild(card);
    });
}

// Update filter inputs with URL parameters
function updateFilterInputs(params) {
    const searchInput = document.getElementById('searchInputEvents');
    const dateFilter = document.getElementById('dateFilterEvents');
    const categoryFilter = document.getElementById('categoryFilterEvents');
    
    if (searchInput) searchInput.value = params.search;
    if (dateFilter) dateFilter.value = params.date;
    if (categoryFilter) categoryFilter.value = params.category;
}

// Update results count display
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (!resultsCount) return;
    
    const params = getUrlParams();
    let title = 'All Events';
    
    if (params.search || params.date || params.category) {
        const filters = [];
        if (params.search) filters.push(`"${params.search}"`);
        if (params.date) filters.push(params.date);
        if (params.category) filters.push(EventLocator.getCategoryDisplayName(params.category));
        
        title = `${count} Event${count !== 1 ? 's' : ''} Found`;
        if (filters.length > 0) {
            title += ` for ${filters.join(', ')}`;
        }
    }
    
    resultsCount.textContent = title;
}

// Apply filters
function applyFilters() {
    const searchInput = document.getElementById('searchInputEvents');
    const dateFilter = document.getElementById('dateFilterEvents');
    const categoryFilter = document.getElementById('categoryFilterEvents');
    
    const searchParams = new URLSearchParams();
    if (searchInput && searchInput.value) searchParams.set('search', searchInput.value);
    if (dateFilter && dateFilter.value) searchParams.set('date', dateFilter.value);
    if (categoryFilter && categoryFilter.value) searchParams.set('category', categoryFilter.value);
    
    // Update URL without reloading the page
    const newUrl = searchParams.toString() ? `events.html?${searchParams.toString()}` : 'events.html';
    window.history.pushState({}, '', newUrl);
    
    // Reload events with new filters
    loadEvents();
}

// Clear all filters
function clearFilters() {
    // Clear filter inputs
    const searchInput = document.getElementById('searchInputEvents');
    const dateFilter = document.getElementById('dateFilterEvents');
    const categoryFilter = document.getElementById('categoryFilterEvents');
    
    if (searchInput) searchInput.value = '';
    if (dateFilter) dateFilter.value = '';
    if (categoryFilter) categoryFilter.value = '';
    
    // Update URL and reload
    window.history.pushState({}, '', 'events.html');
    loadEvents();
}

// Toggle view mode
function toggleViewMode(mode) {
    currentViewMode = mode;
    displayEvents(filteredEvents);
}

// Handle view mode radio buttons
function handleViewModeChange() {
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    
    if (gridView && gridView.checked) {
        toggleViewMode('grid');
    } else if (listView && listView.checked) {
        toggleViewMode('list');
    }
}

// Initialize events page
function initEventsPage() {
    // Load events on page load
    loadEvents();
    
    // Add event listeners
    const applyFiltersBtn = document.getElementById('applyFilters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    // Add view mode change listeners
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    
    if (gridView) {
        gridView.addEventListener('change', handleViewModeChange);
    }
    if (listView) {
        listView.addEventListener('change', handleViewModeChange);
    }
    
    // Add search input enter key listener
    const searchInput = document.getElementById('searchInputEvents');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });
    }
    
    // Add filter change listeners for auto-apply
    const dateFilter = document.getElementById('dateFilterEvents');
    const categoryFilter = document.getElementById('categoryFilterEvents');
    
    if (dateFilter) {
        dateFilter.addEventListener('change', applyFilters);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
}

// Export functions for global access
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.toggleViewMode = toggleViewMode;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initEventsPage); 