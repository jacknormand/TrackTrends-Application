package com.jackynorm.tracktrends.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jackynorm.tracktrends.model.Performance;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PerformanceRepository extends JpaRepository<Performance, Integer> {
    // List<Performance> findAll();

    // list for a ton of rows
    // @Query("SELECT u FROM Performance u WHERE u.team = 'Northern Arizona'")
    // List<Performance> findAllOregon();

    // top 100 counts per team
    @Query("SELECT TRIM(p.team), COUNT(p) FROM Performance p GROUP BY p.team ORDER BY COUNT(p) DESC")
    List<Object[]> top100CountTeam();
    
    // average of all 100 marks for a given : EVENT
    // gets for all years
    // needs gender
    @Query("SELECT YEAR(p.date) AS year, AVG(p.result) AS averageMark " +
            "FROM Performance p " +
            "WHERE p.event = :event " +
            "AND YEAR(p.date) BETWEEN 2012 AND 2023 " +
            "AND p.gender = :gender " +
            "GROUP BY YEAR(p.date) " +
            "ORDER BY YEAR(p.date)")
    List<Object[]> averageForEvent(@Param("gender") String gender, @Param("event") String event);

    // average of top 10 marks

    // most common day/month for every mark! (depending on event does it differ?)
    @Query("SELECT p.event, MONTH(p.date) AS month, DAY(p.date) AS day, COUNT(p) AS count " +
           "FROM Performance p " +
           "WHERE p.season = :season AND p.event = :event " +
           "GROUP BY p.event, MONTH(p.date), DAY(p.date) " +
           "ORDER BY p.event, MONTH(p.date), DAY(p.date)")
    List<Object[]> findEventPerformancesByMonthAndSeason(@Param("season") String season, @Param("event") String event);


    // all time greatest marks: any similarities? time, team, location


}