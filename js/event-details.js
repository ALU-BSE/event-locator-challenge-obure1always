// Event Details Page JavaScript

let currentEvent = null;

// Get event ID from URL
function getEventId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Load event details
function loadEventDetails() {
    const eventId = getEventId();
    const loadingSpinner = document.getElementById('loadingSpinner');
    const eventDetailsContainer = document.getElementById('eventDetailsContainer');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!eventId) {
        showError('No event ID provided');
        return;
    }
    
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    eventDetailsContainer.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Simulate loading delay
    setTimeout(() => {
        // Find event by ID
        currentEvent = EventLocator.eventsData.find(event => event.id === eventId);
        
        if (!currentEvent) {
            showError('Event not found');
            return;
        }
        
        // Populate event details
        populateEventDetails(currentEvent);
        
        // Load similar events
        loadSimilarEvents(currentEvent);
        
        // Hide loading spinner and show content
        loadingSpinner.style.display = 'none';
        eventDetailsContainer.style.display = 'block';
        
        // Update page title
        document.title = `${currentEvent.title} - Event Locator`;
        
    }, 800);
}

// Populate event details in the page
function populateEventDetails(event) {
    // Basic event information
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventTitleBreadcrumb').textContent = event.title;
    document.getElementById('eventCategory').textContent = EventLocator.getCategoryDisplayName(event.category);
    document.getElementById('eventCategory').className = `badge ${EventLocator.getCategoryBadgeClass(event.category)}`;
    
    // Date and time
    document.getElementById('eventDate').textContent = EventLocator.formatDate(event.date);
    document.getElementById('eventTime').textContent = EventLocator.formatTime(event.time);
    
    // Location
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventLocationMap').textContent = event.location;
    
    // Embed Google Map
    const mapContainer = document.getElementById('eventMapEmbed');
    if (mapContainer) {
        const mapQuery = encodeURIComponent(event.location);
        mapContainer.innerHTML = `<iframe width="100%" height="250" style="border:0;border-radius:8px;" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${mapQuery}&output=embed"></iframe>`;
    }
    
    // Price
    const priceElement = document.getElementById('eventPrice');
    priceElement.textContent = EventLocator.formatPrice(event.price);
    priceElement.className = event.price === 0 ? 'price-free' : 'price-paid';
    
    // Description
    document.getElementById('eventDescription').textContent = event.description;
    
    // Organizer
    document.getElementById('eventOrganizer').textContent = event.organizer;
    
    // Event image
    const eventImage = document.getElementById('eventImage');
    eventImage.src = event.image;
    eventImage.alt = event.title;
    
    // Event highlights
    const highlightsContainer = document.getElementById('eventHighlights');
    highlightsContainer.innerHTML = '';
    event.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="bi bi-check-circle"></i>${highlight}`;
        highlightsContainer.appendChild(li);
    });
    
    // Add event listeners for buttons
    addButtonEventListeners(event);
}

// Load similar events
function loadSimilarEvents(currentEvent) {
    const similarEventsContainer = document.getElementById('similarEvents');
    if (!similarEventsContainer) return;
    
    // Find events in the same category (excluding current event)
    const similarEvents = EventLocator.eventsData
        .filter(event => event.category === currentEvent.category && event.id !== currentEvent.id)
        .slice(0, 3); // Show max 3 similar events
    
    if (similarEvents.length === 0) {
        similarEventsContainer.innerHTML = '<p class="text-muted">No similar events found.</p>';
        return;
    }
    
    similarEventsContainer.innerHTML = '';
    similarEvents.forEach(event => {
        const similarEvent = document.createElement('div');
        similarEvent.className = 'similar-event';
        similarEvent.innerHTML = `
            <img src="${event.image}" alt="${event.title}" onerror="this.src='https://via.placeholder.com/60x60?text=Event'">
            <div class="event-info">
                <div class="event-title">${event.title}</div>
                <div class="event-date">${EventLocator.formatDate(event.date)}</div>
            </div>
            <a href="event-details.html?id=${event.id}" class="btn btn-sm btn-outline-primary">View</a>
        `;
        similarEventsContainer.appendChild(similarEvent);
    });
}

// Add event listeners for buttons
function addButtonEventListeners(event) {
    // Register button
    const registerButton = document.getElementById('registerButton');
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            if (event.price === 0) {
                alert('Registration successful! This is a free event.');
            } else {
                alert(`Registration initiated for ${event.title}. You will be redirected to payment.`);
            }
        });
    }
    
    // Share button
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            shareEvent(event);
        });
    }
}

// Share event functionality
function shareEvent(event) {
    const shareData = {
        title: event.title,
        text: event.description.substring(0, 100) + '...',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .catch(err => {
                console.log('Error sharing:', err);
                fallbackShare(event);
            });
    } else {
        fallbackShare(event);
    }
}

// Fallback share method
function fallbackShare(event) {
    const shareUrl = `mailto:?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(
        `${event.title}\n\n${event.description}\n\nDate: ${EventLocator.formatDate(event.date)}\nTime: ${EventLocator.formatTime(event.time)}\nLocation: ${event.location}\n\nView details: ${window.location.href}`
    )}`;
    
    window.open(shareUrl, '_blank');
}

// Show error message
function showError(message) {
    const loadingSpinner = document.getElementById('loadingSpinner');
    const eventDetailsContainer = document.getElementById('eventDetailsContainer');
    const errorMessage = document.getElementById('errorMessage');
    
    loadingSpinner.style.display = 'none';
    eventDetailsContainer.style.display = 'none';
    errorMessage.style.display = 'block';
    
    // Update error message if needed
    const errorTitle = errorMessage.querySelector('h3');
    if (errorTitle) {
        errorTitle.textContent = message;
    }
}

// Initialize event details page
function initEventDetailsPage() {
    // Load event details on page load
    loadEventDetails();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.history.back();
        }
    });
    
    // Add breadcrumb navigation
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow normal navigation
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initEventDetailsPage); 