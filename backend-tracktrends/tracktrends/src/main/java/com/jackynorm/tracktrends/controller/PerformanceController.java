package com.jackynorm.tracktrends.controller;
import com.jackynorm.tracktrends.model.Performance;
import com.jackynorm.tracktrends.repository.PerformanceRepository;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
// @RequestMapping("/api")
public class PerformanceController {

    @Autowired
    PerformanceRepository performanceRepository;

    @GetMapping("/perf")
    public ResponseEntity<List<Performance>> findByPublished() {
        try {
			List<Performance> performances = performanceRepository.findAll();

            // System.out.println(performanceRepository.findAll());

			if (performances.isEmpty()) {
                System.out.println("none");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(performances, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
}