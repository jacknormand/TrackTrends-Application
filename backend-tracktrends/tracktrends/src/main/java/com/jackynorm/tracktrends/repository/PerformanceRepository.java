package com.jackynorm.tracktrends.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jackynorm.tracktrends.model.Performance;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

public interface PerformanceRepository extends JpaRepository<Performance, Integer> {
    List<Performance> findAll();
}