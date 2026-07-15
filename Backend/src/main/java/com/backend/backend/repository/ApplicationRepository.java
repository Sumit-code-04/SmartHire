package com.backend.backend.repository;

import com.backend.backend.entity.Application;
import com.backend.backend.entity.Job;
import com.backend.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository
        extends JpaRepository<Application, Long> {
    List<Application> findByUser(User user);
    List<Application> findByJob(Job job);
    boolean existsByUserAndJob(User user, Job job);

}