package com.backend.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "applications")
public class Application {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    public Application() {
    }

    public Application(Long id,
                       User user,
                       Job job,
                       ApplicationStatus status) {

        this.id = id;
        this.user = user;
        this.job = job;
        this.status = status;
    }

    public enum ApplicationStatus {
        APPLIED,
        REVIEWED,
        SHORTLISTED,
        REJECTED,
        HIRED
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public ApplicationStatus getStatus() {
        return status;
    }

    public void setStatus(ApplicationStatus status) {
        this.status = status;
    }
}
