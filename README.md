# MTN Pulse App

An engagement platform developed for MTN, Africa's leading telecommunications network, the MTN Pulse App offers interactive features, promotions, and tools for MTN customers. The app integrates multiple services such as data and voice bundle purchases, in-app notifications, MTN freebies and deals, entertainment, and educational content, providing users with a comprehensive experience on a single platform.

---

## 📋 Project Overview
The MTN Pulse App was designed to enhance customer engagement for MTN by offering an interactive, user-friendly platform with features tailored to users’ needs. My role as the lead engineer included collaborating with large teams, managing weekly check-ins with MTN managers, and overseeing both the development and maintenance of core functionalities. The app currently serves millions of users across Uganda.

---

## ✨ Features
- **Data & Voice Bundles**: Users can purchase and manage their data and voice bundles within the app.
- **Freebies**: Users can get promotional codes from their favorite vendors.
- **Pulse Radio**: Pulsers can tune into the pulse radio on the go.
- **Games**: Menu that navigates to MTN Go-Games.
- **Events**: Pulsers are kept up to date with upcoming events.
- **Pulse Tube**: Repository of clips from past events for Pulsers to re-live their most exciting events
- **Blogs**: Educational blogs

---

## 🛠️ Tech Stack
- **Frontend**: React Native for a cross-platform experience on Android and iOS.
- **Backend**: Node.js and Express for scalable, high-performance API handling.
- **Cloud Services**: Google Cloud Platform for cloud storage, compute resources, and deployment.
- **Database**: MongoDB for flexible data management, suitable for handling large datasets.
- **Authentication**: Firebase Auth to manage user logins securely.
- **DevOps**: Docker for containerized deployments, with CI/CD pipelines on Jenkins.

---

## 🚧 Challenges and Solutions
- **Challenge**: **Managing High Traffic Volumes**
  - **Solution**: Scaled the backend using load balancers and optimized API calls to reduce latency during peak hours. Used caching strategies to enhance response time for frequently accessed endpoints.
  
- **Challenge**: **Real-Time Notification Delivery**
  - **Solution**: Integrated Firebase Cloud Messaging (FCM) for seamless push notifications. Implemented rate limiting to prevent spam and ensure efficient delivery without overloading the system.
  
- **Challenge**: **Ensuring Security and Compliance**
  - **Solution**: Enforced strict authentication protocols with role-based access control and encrypted API communication. Regular security audits were conducted to comply with MTN’s data protection policies.

---

## 🏗️ Architecture
The MTN Pulse App follows a modular, microservices-based architecture, designed for scalability and ease of maintenance. Below is a high-level overview of the architecture:

1. **Frontend (React Native)**:
   - Manages the user interface, including views for data and voice bundles, account details, and promotional content.
   - Integrates with the backend via secure API calls.

2. **Backend (Node.js + Express)**:
   - Handles API requests, processes business logic, and interacts with MTN’s core services.
   - Implements caching, error handling, and rate limiting for optimal performance.
   - Manages integration with MTN’s payment gateways and third-party services.

3. **Database (MongoDB)**:
   - Stores user profiles, purchase history, and app preferences.
   - Indexed for fast data retrieval to handle large volumes of user activity.

4. **Notification System (Firebase Cloud Messaging)**:
   - Sends real-time notifications to users about promotions, account updates, and service alerts.
   - Rate limiting and logging to monitor message delivery and effectiveness.

5. **Cloud Infrastructure (Google Cloud)**:
   - Ensures scalable compute and storage resources.
   - Supports containerized deployments using Docker and enables CI/CD with Jenkins for continuous integration.

     <img src="https://github.com/TrishKedi/professional-projects/blob/main/Pulse%20APP%20Architecture.jpeg"/>

---

## 🏗️ Flow Diagrams

  1. **VAS**:
    <img src="https://github.com/TrishKedi/professional-projects/blob/main/Pulse%20APP%20VASAPPS.jpeg"/>
    
---    

## 📈 Results and Impact
- **User Engagement**: Enhanced MTN’s customer engagement with over a 20% increase in daily active users.
- **Reliability**: Achieved 99.9% uptime with scalable, optimized architecture.
- **Revenue Growth**: Increased in-app transactions by 30% through streamlined bundle purchasing and promotional offers.

---

## 🌐 Live Demo

Experience the MTN Pulse App live through one of the options below:

1. **[Interactive Web Demo (Hosted on Heroku)](https://your-heroku-app-link.com)** - A full-featured web version of the MTN Pulse App where you can explore features like data bundle purchases, promotional content, and in-app notifications.
   
2. **[Static Demo (GitHub Pages)](https://trishkedi.github.io/mtn-pulse-demo)** - A frontend-only version with mock data for a secure yet realistic experience.

3. **[Figma Prototype](https://www.figma.com/proto/your-prototype-link)** - Click through the app screens to explore the UI and see how the app flows from feature to feature.

4. **[Mobile APK Download](https://your-firebase-link.com)** - Test the app directly on your Android device (Demo version with limited features).

> **Note**: The demo versions use mocked data to simulate a real user experience without affecting live systems or user data.


Thank you for exploring the MTN Pulse App repository! For further information, please feel free to reach out or check out the detailed documentation in the `docs` folder.
# mtn-pulse-app
