[Check it out here!](https://tracktrends.jacknormand.com)
# _tracktrends_
Welcome to tracktrends! This application is designed to provide users with easy access to data related to college track and field events. Built with Angular for the frontend and Spring Boot for the backend, this platform offers a user-friendly interface for accessing and exploring various aspects of college track and field performances. This project also serves as a demo for anyone looking for a full stack application using the same stack (Angular, Postgre, Spring). When I was creating this app, I found it hard to find samples and resources for newer versions of Angular/other technologies. Maybe this can help some people :)

## Features
- View the best teams in Divison 1 college track
- See how performances increase or decrease over time
- Look at when athletes tend to peak in certain events throughout the year
- See which schools are the best at which events

## Technologies Used
- Frontend
  - [Angular 17](https://angular.io/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Flowbite](https://flowbite.com/)
  - [Chart.js](https://www.chartjs.org/)
  - Hosted with [Firebase Hosting](https://firebase.google.com/)
- Backend
  - [Spring Boot](https://spring.io/) (Maven)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Docker](https://www.docker.com/) + Docker Compose
  - Hosted on a [DigitalOcean](https://www.digitalocean.com/) Droplet

## Want to run this on your machine? Get started below
NOTE: This setup is extremely brief intentionally because I don't expect anyone to actually run this themselves. <br>
 1. Clone this repo: `git clone https://github.com/jacknormand/TrackTrends-Application.git`
 2. Setup the backend
    - Fill out the docker-compose.yml with your environment variables for your database
    - Add an application.properties to main/resources (didn't include this for security reasons)
    - (optional) add .sql file for a database to load. I did this because the databases I use are small, and need to be moved around/updated a lot. Use [this](https://github.com/jacknormand/TFRRS-TopQualifer) if you need a database, and either use the databse it makes locally or pg_dump it and use that
    - To package backend: `mvn package -DskipTests`
    - Build image with docker: `docker build . -t trends:v1`
    - `docker-compose up` to run it!
3. Setup the frontend
    - Install Angular and run `ng serve --open`

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer
This application is intended for educational purposes only. The track and field data displayed within this application is sourced from publicly available sources on the web.
