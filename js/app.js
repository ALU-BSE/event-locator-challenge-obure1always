// Event Locator Application - Main JavaScript File

// Sample event data
const eventsData = [
    {
        id: 1,
        title: "Tech Conference 2024",
        description: "Join us for the biggest technology conference of the year. Learn about the latest trends in AI, machine learning, and web development.",
        date: "2024-02-15",
        time: "09:00",
        location: "Convention Center, Downtown",
        category: "technology",
        price: 150,
        organizer: "Tech Events Inc.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        highlights: ["Keynote speakers", "Networking sessions", "Workshops", "Exhibition hall"]
    },
    {
        id: 2,
        title: "Jazz Night at Blue Moon",
        description: "Experience an evening of smooth jazz with local and international artists. Perfect for a romantic night out or relaxing with friends.",
        date: "2024-02-10",
        time: "20:00",
        location: "Blue Moon Jazz Club",
        category: "music",
        price: 25,
        organizer: "Blue Moon Entertainment",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        highlights: ["Live jazz music", "Cocktail bar", "Intimate setting", "Reserved seating"]
    },
    {
        id: 3,
        title: "Startup Networking Meetup",
        description: "Connect with fellow entrepreneurs, investors, and startup enthusiasts. Share ideas, find collaborators, and grow your network.",
        date: "2024-02-20",
        time: "18:30",
        location: "Innovation Hub",
        category: "business",
        price: 0,
        organizer: "Startup Community",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        highlights: ["Networking", "Pitch sessions", "Mentorship", "Free refreshments"]
    },
    {
        id: 4,
        title: "Marathon 2024",
        description: "Annual city marathon with routes for all skill levels. Join thousands of runners in this exciting community event.",
        date: "2024-03-01",
        time: "07:00",
        location: "City Park",
        category: "sports",
        price: 45,
        organizer: "City Sports Association",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop",
        highlights: ["Multiple distances", "Medals for finishers", "Water stations", "Medical support"]
    },
    {
        id: 5,
        title: "Art Exhibition: Modern Masters",
        description: "Explore contemporary art from emerging and established artists. Features paintings, sculptures, and digital installations.",
        date: "2024-02-25",
        time: "10:00",
        location: "Modern Art Gallery",
        category: "arts",
        price: 12,
        organizer: "Modern Art Gallery",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        highlights: ["Contemporary art", "Artist talks", "Guided tours", "Gift shop"]
    },
    {
        id: 6,
        title: "Food Festival 2024",
        description: "Taste cuisines from around the world at this annual food festival. From street food to gourmet dining, there's something for everyone.",
        date: "2024-03-05",
        time: "11:00",
        location: "Riverside Park",
        category: "food",
        price: 20,
        organizer: "Food Festival Committee",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
        highlights: ["International cuisine", "Cooking demonstrations", "Live music", "Family activities"]
    },
    {
        id: 7,
        title: "Web Development Workshop",
        description: "Learn modern web development techniques including HTML5, CSS3, and JavaScript. Perfect for beginners and intermediate developers.",
        date: "2024-02-18",
        time: "14:00",
        location: "Tech Learning Center",
        category: "education",
        price: 75,
        organizer: "Code Academy",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        highlights: ["Hands-on coding", "Take-home materials", "Certificate", "Q&A session"]
    },
    {
        id: 8,
        title: "Yoga & Wellness Retreat",
        description: "Recharge your mind and body with a day of yoga, meditation, and wellness activities in a peaceful natural setting.",
        date: "2024-02-28",
        time: "08:00",
        location: "Serenity Gardens",
        category: "health",
        price: 60,
        organizer: "Wellness Center",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        highlights: ["Multiple yoga sessions", "Meditation", "Healthy lunch", "Nature walks"]
    },
    {
        id: 9,
        title: "Classical Music Concert",
        description: "Experience the beauty of classical music performed by the city's symphony orchestra. Featuring works by Mozart, Beethoven, and Bach.",
        date: "2024-03-10",
        time: "19:30",
        location: "City Concert Hall",
        category: "music",
        price: 80,
        organizer: "City Symphony Orchestra",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        highlights: ["Symphony orchestra", "Classical repertoire", "Premium seating", "Pre-concert talk"]
    },
    {
        id: 10,
        title: "Business Leadership Summit",
        description: "Join industry leaders and experts for insights on leadership, innovation, and business strategy in the digital age.",
        date: "2024-03-15",
        time: "09:00",
        location: "Business Center",
        category: "business",
        price: 200,
        organizer: "Business Leaders Association",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        highlights: ["Keynote speakers", "Panel discussions", "Networking breaks", "Lunch included"]
    }
];

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

function formatPrice(price) {
    return price === 0 ? 'Free' : `$${price}`;
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        'music': 'Music',
        'technology': 'Technology',
        'business': 'Business',
        'sports': 'Sports',
        'arts': 'Arts & Culture',
        'food': 'Food & Drink',
        'education': 'Education',
        'health': 'Health & Wellness'
    };
    return categoryNames[category] || category;
}

function getCategoryBadgeClass(category) {
    return `bg-${category}`;
}

// Filter functions
function filterEvents(events, searchTerm, dateFilter, categoryFilter) {
    return events.filter(event => {
        // Search term filter
        const searchMatch = !searchTerm || 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.organizer.toLowerCase().includes(searchTerm.toLowerCase());

        // Category filter
        const categoryMatch = !categoryFilter || event.category === categoryFilter;

        // Date filter
        let dateMatch = true;
        if (dateFilter) {
            const eventDate = new Date(event.date);
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const nextWeek = new Date(today);
            nextWeek.setDate(nextWeek.getDate() + 7);
            const nextMonth = new Date(today);
            nextMonth.setMonth(nextMonth.getMonth() + 1);

            switch (dateFilter) {
                case 'today':
                    dateMatch = eventDate.toDateString() === today.toDateString();
                    break;
                case 'tomorrow':
                    dateMatch = eventDate.toDateString() === tomorrow.toDateString();
                    break;
                case 'this-week':
                    dateMatch = eventDate >= today && eventDate <= nextWeek;
                    break;
                case 'this-month':
                    dateMatch = eventDate.getMonth() === today.getMonth() && 
                               eventDate.getFullYear() === today.getFullYear();
                    break;
                case 'next-month':
                    dateMatch = eventDate.getMonth() === nextMonth.getMonth() && 
                               eventDate.getFullYear() === nextMonth.getFullYear();
                    break;
            }
        }

        return searchMatch && categoryMatch && dateMatch;
    });
}

// Event card creation
function createEventCard(event, viewMode = 'grid') {
    const card = document.createElement('div');
    card.className = viewMode === 'grid' ? 'col-lg-4 col-md-6 mb-4' : 'col-12 mb-3';
    
    card.innerHTML = `
        <div class="card event-card h-100 ${viewMode === 'list' ? 'list-view' : ''}">
            <img src="${event.image}" class="card-img-top event-image" alt="${event.title}">
            <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="badge ${getCategoryBadgeClass(event.category)}">${getCategoryDisplayName(event.category)}</span>
                    <span class="text-muted small">${formatPrice(event.price)}</span>
                </div>
                <h5 class="card-title">${event.title}</h5>
                <p class="card-text text-muted flex-grow-1">${event.description.substring(0, 100)}${event.description.length > 100 ? '...' : ''}</p>
                <div class="event-meta">
                    <i class="bi bi-calendar-event"></i>
                    <span>${formatDate(event.date)}</span>
                </div>
                <div class="event-meta">
                    <i class="bi bi-clock"></i>
                    <span>${formatTime(event.time)}</span>
                </div>
                <div class="event-meta">
                    <i class="bi bi-geo-alt"></i>
                    <span>${event.location}</span>
                </div>
            </div>
            <div class="card-footer bg-transparent border-top-0">
                <a href="event-details.html?id=${event.id}" class="btn btn-primary w-100">
                    View Details
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Load featured events on home page
function loadFeaturedEvents() {
    const featuredContainer = document.getElementById('featuredEvents');
    if (!featuredContainer) return;

    // Get 3 random events for featured section
    const featuredEvents = eventsData.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    featuredContainer.innerHTML = '';
    featuredEvents.forEach(event => {
        const card = createEventCard(event, 'grid');
        featuredContainer.appendChild(card);
    });
}

// Handle search form submission
function handleSearchForm(event) {
    event.preventDefault();
    
    const searchInput = document.getElementById('searchInput');
    const dateFilter = document.getElementById('dateFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    
    const searchParams = new URLSearchParams();
    if (searchInput.value) searchParams.set('search', searchInput.value);
    if (dateFilter.value) searchParams.set('date', dateFilter.value);
    if (categoryFilter.value) searchParams.set('category', categoryFilter.value);
    
    window.location.href = `events.html?${searchParams.toString()}`;
}

// Initialize application
function initApp() {
    // Load featured events on home page
    loadFeaturedEvents();
    
    // Add search form event listener
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearchForm);
    }
}

// Export functions for use in other files
window.EventLocator = {
    eventsData,
    formatDate,
    formatTime,
    formatPrice,
    getCategoryDisplayName,
    getCategoryBadgeClass,
    filterEvents,
    createEventCard
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp); 