## Goal Tracker

### Week 11 - 13 Project

## API Endpoints

| Returns | Verb | URI | Description |
|---------|------|-----|-------------|
| `List<Goal>` | GET | api/goals | Retrieve list of goals |
| Goal | GET | api/goals/{goalId} | Retrieve one goal by id |
| Goal | POST | api/goals | Create a new goal |
| Goal | PUT | api/goals/goalId | Update an existing goal |
| Void | DELETE | goals/goalId | Delete an existing goal |
| `List<Goal>` | GET | api/goals/search/{keyword} | Search for goals by name, category, or description match |

## Overview

This project maintains a MySQL database that houses goal entities. The database is managed by Spring Data JPA and Spring REST services. Spring Data JPA allows for the use of repository and service interfaces that handle much of the database query work. Spring Rest allows for the use of more succinct and efficient controller methods. The Angular framework was used to build out data managing and front end structures.

## Technologies Used

- Spring Tool Suite, (Spring Boot)
- Spring REST
- Spring Data JPA
- Java
- Junit Testing
- GitHub/Git
- Atom
- MAMP
- Gradle
- MySQL
- MySQL Workbench
- JavaScript
- Visual Studio Code
- Bootstrap

## Lessons Learned

This project was a good exercise in Spring Data JPA and Spring REST services. One of the most interesting parts for me was the efficiency and automated-nature of the repository interface. In comparison to a few weeks ago when we had DAO classes that were hundreds of lines long, the repository accomplishing the same thing in about 3 lines of code was a bit mind-boggling.

The later weeks of this project focused on development within Angular. It was a good learning experience in dynamically building HTML components and building out the front end of the website with JavaScript and Bootstrap. We also implemented services, models, and components through Angular. I feel like I have a better grasp of generating and implementing the Angular framework for web applications.
