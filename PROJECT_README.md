# Event Locator - Web Application

A responsive web application that allows users to search for events happening in their city. Built with HTML, CSS (Bootstrap), and JavaScript.

## 🌟 Features

### Home Page (`index.html`)
- **Hero Section**: Attractive landing page with gradient background
- **Search Form**: Search bar with date and category filters
- **Featured Events**: Randomly displayed events to showcase the platform
- **Responsive Design**: Mobile-friendly layout using Bootstrap

### Events List Page (`events.html`)
- **Advanced Filtering**: Search by text, date, and category
- **Dynamic Results**: Real-time filtering with URL parameter support
- **View Modes**: Toggle between grid and list views
- **Loading States**: Smooth loading animations and error handling
- **Results Count**: Dynamic display of filtered results

### Event Details Page (`event-details.html`)
- **Comprehensive Information**: Complete event details with images
- **Event Highlights**: Key features and amenities
- **Similar Events**: Recommendations based on category
- **Interactive Elements**: Registration and sharing functionality
- **Location Information**: Event venue details and transportation info

## 🛠️ Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom styles with Bootstrap 5.3.0 integration
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Bootstrap**: Responsive grid system and components
- **Bootstrap Icons**: Icon library for consistent UI

### Key JavaScript Features
- **Event Filtering**: Advanced search and filter functionality
- **Dynamic Content**: JavaScript-generated event cards and details
- **URL Management**: Search parameters in URL for bookmarking
- **Responsive Interactions**: Touch-friendly mobile experience
- **Error Handling**: Graceful error states and loading indicators

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Bootstrap Grid**: Flexible layout system
- **Custom CSS**: Enhanced styling with hover effects and animations
- **Viewport Meta**: Proper mobile viewport configuration

## 📁 Project Structure

```
event-locator/
├── index.html              # Home page
├── events.html             # Events list page
├── event-details.html      # Event details page
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── app.js             # Main application logic
│   ├── events.js          # Events page functionality
│   └── event-details.js   # Event details functionality
├── README.md              # Original assignment README
├── assignment_resources.md # Learning resources
└── PROJECT_README.md      # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Or serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

### Usage
1. **Browse Events**: Visit the home page to see featured events
2. **Search Events**: Use the search form to find specific events
3. **Filter Results**: Apply date and category filters
4. **View Details**: Click on any event to see full details
5. **Register/Share**: Use the interactive buttons on event details

## 🎨 Design Features

### Visual Design
- **Modern UI**: Clean, professional design with gradient accents
- **Card Layout**: Bootstrap cards with hover effects
- **Color Coding**: Category-specific badge colors
- **Typography**: Clear hierarchy with Bootstrap typography classes

### User Experience
- **Intuitive Navigation**: Clear breadcrumbs and navigation
- **Loading States**: Visual feedback during data loading
- **Error Handling**: User-friendly error messages
- **Accessibility**: Semantic HTML and ARIA labels

### Responsive Features
- **Mobile Navigation**: Collapsible navbar for mobile devices
- **Flexible Grid**: Bootstrap grid system adapts to screen size
- **Touch-Friendly**: Appropriate button sizes for mobile interaction
- **Optimized Images**: Responsive images with proper aspect ratios

## 🔧 Customization

### Adding New Events
Edit the `eventsData` array in `js/app.js`:

```javascript
{
    id: 11,
    title: "Your Event Title",
    description: "Event description...",
    date: "2024-03-20",
    time: "14:00",
    location: "Event Location",
    category: "technology", // Use existing categories
    price: 50,
    organizer: "Event Organizer",
    image: "https://your-image-url.com/image.jpg",
    highlights: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Modifying Categories
Update the category options in the HTML files and the `getCategoryDisplayName` function in `js/app.js`.

### Styling Changes
Modify `css/style.css` to customize colors, fonts, and layout.

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 Assignment Requirements Met

### ✅ Basic Structure & Bootstrap
- Clear HTML structure with semantic elements
- Full Bootstrap 5.3.0 integration via CDN
- Responsive grid system implementation

### ✅ Home Page Functionality
- Working search form with filters
- Featured events section
- Proper form submission handling

### ✅ Event List Display
- Dynamic event card generation
- Search and filter functionality
- Grid and list view modes
- Loading states and error handling

### ✅ Event Details
- Complete event information display
- Similar events recommendations
- Interactive registration and sharing
- Responsive layout for all screen sizes

### ✅ JavaScript Functionality
- Advanced search and filtering
- Dynamic content generation
- Event listeners for user interactions
- URL parameter management

### ✅ Responsive Design
- Mobile-first approach
- Bootstrap responsive utilities
- Touch-friendly interface
- Cross-device compatibility

## 🔮 Future Enhancements

- **Backend Integration**: Connect to a real API for event data
- **User Authentication**: User accounts and favorites
- **Event Creation**: Allow users to create and manage events
- **Maps Integration**: Interactive maps for event locations
- **Notifications**: Email/SMS reminders for events
- **Social Features**: Comments, ratings, and reviews
- **Advanced Search**: Location-based search and recommendations

## 📄 License

This project is created for educational purposes as part of the Event Locator challenge assignment.

## 👨‍💻 Author

Created as part of the Event Locator web application challenge, demonstrating proficiency in HTML, CSS, and JavaScript development with Bootstrap framework. 