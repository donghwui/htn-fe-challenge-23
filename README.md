# Hack the North Frontend Challenge

🔗<a href="https://quixotic-icecream-916.notion.site/Hack-the-North-Frontend-Challenge-5beed63511ee4134ac65b3cfa8780f58">Write-up</a>🔗 

🔗<a href="https://htn-fe-challenge-23.netlify.app/">Project</a>🔗

# Getting Started 🪄

1. Open the <a href="https://htn-fe-challenge-23.netlify.app/"> project </a>
2. Enter the admin key to view private events
- email: hackathonglobal@email.com
- pw: codingisfun

# Goal 🎯

> Build a creative and interactive tool that displays events for both hackers and general public for *Hackathon Global Inc.™,* where attendees obtain access to the full list of events through log-in.
> 

# Tools & Resources 🛠️

**Frontend Library**: `React`


**API Client Library**: `GraphQL` ,`Apollo Client`

**Image Resource**: 
- <a href="https://www.freepik.com/free-vector/digital-global-connection-network-technology-background_6864937.htm#query=digital">Freepik </a>
- <a href="https://www.pngplay.com/image/11115"> PNGPlay </a>

# Features 💡

- **Login Authentication:**
    - Implemented a secure login authentication system that enables logged-in hackers to view hidden, private events on their personalized dashboard
    - Created an admin key (username: hackathonglobal@email.com / password: codingisfun) to facilitate admin access for demonstration purposes
    - Built an intuitive error handling system that displays a friendly message to users who have entered an incorrect name or input
    - Included a logout button that refreshes the page and clears the login status to exit the dashboard
    - Designed a visually appealing linear gradient colour and hover animation to enhance the user experience
- **Sorted Table**:
    - Developed a sorted table system that sorts data queries in the order of **`start_time`**
    - Flexible structure due by using **`overflow-y:scroll`**
- **Search Bar:**
    - Implemented a powerful search bar system that enables users to quickly locate events they are interested in
    - Intelligent search algorithm that returns any event that matches the user's input
# Considerations 💭

## Comments

- Included comments throughout the script to ensure that the code is easily readable and maintainable

## Table system

- Easy to add new data fields or columns as needed without disrupting the overall organization or functionality of the project (scalable & maintainable)
- Clear organization in a sorted list of **`start_time`**, allowing users to quickly locate specific data entries within the table

## Accessibility & Responsiveness

- Used underlined hyperlinked texts and a color blind palette to optimize color contrast and increase accessibility for users with color vision deficiencies
- Used resizable text to accommodate various screen sizes and improve accessibility for users with visual impairments
- Project can be accessed on a wide variety of devices, from desktop computers to tablets

## Visual Appearance

- Featured a theme of a digital globe to emphasize the innovative technology that connects people around the world
- Cool hues of colors like blue and purple were used to add a technological and futuristic aspect to the project
- **`linear-gradient`** and **`hover`** effects were used to enhance interactivity and engagement

# Preview 🔍
<img width="1917" alt="image" src="https://user-images.githubusercontent.com/63986023/220753980-ac595e68-5da0-4f1a-addf-a7e2abb10d1e.png">
Public Dashboard
<img width="1915" alt="image" src="https://user-images.githubusercontent.com/63986023/220753830-1eeb144e-c859-435c-b894-d3a1771c6535.png">
Private Dashboard

# Improvements 🌱

Due to the limited time given, there are some additional features I wish to work on: 

- **Card Format:** To improve the user experience and engagement with the events, I would consider implementing pop-up cards or card component from the **`react-bootstrap`** dependency for displaying event information. I would also add a "view more" button to each event card, which would show more detailed description and links to relevant events.
- **Enhanced Features:**  I would also consider implementing user account functionality such as interactive profile customization and preference options to further enhance the user experience. Creating a real-time chat functionality or adding a live leaderboard to track the progress of teams would also be a great way for users to connect with others.
- **Performance Metrics**: I would also monitor performance metrics such as page load times, website view, server response times, and user engagement metrics to see where improvements can be made. By using tools such as Google Analytics, Datadog, or Google Analytics, I can ensure that the application is meeting the needs of users.
