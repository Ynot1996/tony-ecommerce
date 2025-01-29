FROM maven:3.8.4-openjdk-17

WORKDIR /app
COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

CMD ["java", "-jar", "target/ecommerce-0.0.1-SNAPSHOT.jar"] 