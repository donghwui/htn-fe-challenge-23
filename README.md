# Hack the North Front-End Challenge 🌐

🔗<a href="https://quixotic-icecream-916.notion.site/Hack-the-North-Front-End-Challenge-5beed63511ee4134ac65b3cfa8780f58" >Link to the Detailed Write-Up </a> 🔗
# Getting Started 🪄

1. Open the website
2. Use the admin key to login and view private events
- email: hackathonglobal@email.com 
- password: codingisfun


# Goal 🎯

> Build a creative and interactive tool that displays events for both hackers and general public for *Hackathon Global Inc.™,* where attendees obtain access to the full list of events through log-in.
> 

# Tools & Resources🛠️

**Frontend library**: `React`

**API Client Libraries**: `GraphQL`, `Apollo Client`

**Image Resource**: <a href="https://www.freepik.com/free-vector/digital-global-connection-network-technology-background_6864937.htm#query=digital%20globe&position=5&from_view=keyword&track=ais">Freepik </a>

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

# Challenges 🏔️

Due to my limited skills and knowledge, I encountered numerous challenges when working on my project. In particular, I had to learn how to utilize **GraphQL methods** and implement **various functions in React** that were completely new to me.

Despite these challenges, I approached each requirement with a positive attitude and passion to learn, which helped me to stay focused and motivated throughout the project. I used a variety of resources and tutorials to help me better understand the new concepts and technologies. I read through documentation and watched video tutorials with the goal of deepening my understanding in the realm of frontend development.

My proudest part of my progress would be the login authentication feature because it required me to integrate several components in order to ensure seamless functionality. From creating the UI of the login form to hiding certain events based on users’ login status,  I was able to successfully build out the login process and ensure secured access of their accounts.

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
<img width="1916" alt="public" src="https://user-images.githubusercontent.com/63986023/220732495-19ca9596-2863-46e0-94f1-987283291566.png">
Guest Dashboard
<img width="1915" alt="private" src="https://user-images.githubusercontent.com/63986023/220732601-517de434-77ca-4dd1-b815-0225de92ea06.png">
Loggedin Dashboard

# Improvements 🌱

Due to the limited time given, there are some additional features I wish to work on: 

- **Card Format:** To improve the user experience and engagement with the events, I would consider implementing pop-up cards or card component from the **`react-bootstrap`** dependency for displaying event information. I would also add a "view more" button to each event card, which would show more detailed description and links to relevant events.
- **Enhanced Features:**  I would also consider implementing user account functionality such as interactive profile customization and preference options to further enhance the user experience. Creating a real-time chat functionality or adding a live leaderboard to track the progress of teams would also be a great way for users to connect with others.
- **Performance Metrics**: I would also monitor performance metrics such as page load times, website view, server response times, and user engagement metrics to see where improvements can be made. By using tools such as Google Analytics, Datadog, or Google Analytics, I can ensure that the application is meeting the needs of users.
