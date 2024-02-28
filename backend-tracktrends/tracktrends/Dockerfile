FROM openjdk:17
VOLUME /tmp
EXPOSE 8443
COPY target/tracktrends-0.0.1-SNAPSHOT.jar trends.jar
ENTRYPOINT ["java","-jar","/trends.jar"]

