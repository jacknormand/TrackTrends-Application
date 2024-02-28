FROM openjdk:17
VOLUME /tmp
EXPOSE 443
COPY target/tracktrends-0.0.1-SNAPSHOT.jar trends.jar
ENTRYPOINT ["java","-jar","/trends.jar"]

