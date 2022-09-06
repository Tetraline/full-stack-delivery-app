package com.delivery.deliveryapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class DeliveryAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeliveryAppApplication.class, args);
	}

}
