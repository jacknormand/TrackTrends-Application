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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("/api")
public class PerformanceController {

    @Autowired
    PerformanceRepository performanceRepository;
    
    // API MAPS

    @GetMapping("/top100count")
    public ResponseEntity<List<Object[]>> topCount() {
        try {
			List<Object[]> performances = performanceRepository.top100CountTeam();

			if (performances.isEmpty()) {
                System.out.println("none found");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(performances, HttpStatus.OK);
		} catch (Exception e) {
            System.out.println(e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }

    @GetMapping("/avgforevent/{gender}/{event}")
    public ResponseEntity<List<Object[]>> avgEvent(@PathVariable String gender, @PathVariable String event) {
        try {
			List<Object[]> performances = performanceRepository.averageForEvent(gender, event);

			if (performances.isEmpty()) {
                System.out.println("none found");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(performances, HttpStatus.OK);
		} catch (Exception e) {
            System.out.println(e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }

	@GetMapping("/timecount")
    public ResponseEntity<List<Object[]>> timeCount() {
        try {
			System.out.println("hello");
			List<Object[]> performances = performanceRepository.findMostCommonMonth();

			if (performances.isEmpty()) {
                System.out.println("none found");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(performances, HttpStatus.OK);
		} catch (Exception e) {
            System.out.println(e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }





}