package com.jackynorm.tracktrends.controller;
import com.jackynorm.tracktrends.repository.PerformanceRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://tracktrends.jacknormand.com", allowedHeaders = "*")

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

	@GetMapping("/timecount/{season}/{event}")
    public ResponseEntity<List<Object[]>> findEventPerformancesByMonthAndSeason(@PathVariable String season, @PathVariable String event) {
        try {
			List<Object[]> performances = performanceRepository.findEventPerformancesByMonthAndSeason(season, event);

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


	@GetMapping("/eventU")
    public ResponseEntity<List<Object[]>> eventUniversity() {
        try {
			List<Object[]> performances = performanceRepository.eventUniversity();

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
	
	@GetMapping("/besteventU")
    public ResponseEntity<List<Object[]>> besteventUniversity() {
        try {
			List<Object[]> performances = performanceRepository.besteventUniversity();

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