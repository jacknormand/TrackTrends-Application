[Check it out here!](https://tracktrends.jacknormand.com)

![Screenshot 2024-02-28 at 5 15 16 PM](https://github.com/jacknormand/TrackTrends-Application/assets/21299000/66fb8824-8c49-4a18-8fa1-8add6a932518)

Welcome to tracktrends! This application is designed to provide users with easy access to data related to college track and field events. Built with Angular for the frontend and Spring Boot for the backend, this platform offers a user-friendly interface for accessing and exploring various aspects of college track and field performances. This project also serves as a demo for anyone looking for a full stack application using the same stack (Angular, Postgre, Spring). When I was creating this app, I found it hard to find samples and resources for newer versions of Angular/other technologies. Maybe this can help some people :)

## Features
- View the best teams in Divison 1 college track
- See how performances increase or decrease over time
- Look at when athletes tend to peak in certain events throughout the year
- See which schools are the best at which events

## Screenshots
![Screenshot 2024-02-28 at 5 10 02 PM](https://github.com/jacknormand/TrackTrends-Application/assets/21299000/a0468923-535f-4fb8-98ce-d3342339ef1e)

![Screenshot 2024-02-28 at 5 09 55 PM](https://github.com/jacknormand/TrackTrends-Application/assets/21299000/1cf09e2d-3914-4249-8554-967b259e9640)

![Screenshot 2024-02-28 at 5 10 53 PM](https://github.com/jacknormand/TrackTrends-Application/assets/21299000/1edededc-321d-4975-962e-29689390a4e3)


![Screenshot 2024-02-28 at 5 11 09 PM](https://github.com/jacknormand/TrackTrends-Application/assets/21299000/78439fb0-f79a-4236-b5dd-dae37901391f)



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
    - (optional) add .sql file for a database to load. I did this because the databases I use are small, and need to be moved around/updated a lot. Use pg_dump to create .sql file if you want to do it this way.
    - To package backend: `mvn package -DskipTests`
    - Build image with docker: `docker build . -t trends:v1`
    - `docker-compose up` to run it!
3. Setup the frontend
    - Install Angular and run `ng serve --open`

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer
This application is intended for educational purposes only. The track and field data displayed within this application is sourced from publicly available sources on the web. Data is not included in this project repository and users must collect their own data if they wish to use this project themselves
