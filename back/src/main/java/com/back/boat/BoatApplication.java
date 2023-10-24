package com.back.boat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BoatApplication {

  public static void main(String[] args) {
    SpringApplication.run(BoatApplication.class, args);

    System.out.println("\nAPI up and running at http://localhost:8080/boats");
  }

}