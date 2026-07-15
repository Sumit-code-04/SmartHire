package com.backend.backend.controller;

import com.backend.backend.entity.Application;
import com.backend.backend.service.ApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }


    @PostMapping("/{jobId}")
    public ResponseEntity<Application> applyJob(
            @PathVariable Long jobId
    ) {

        System.out.println("===== APPLY API HIT =====");
        return ResponseEntity.ok(
                applicationService.applyJob(jobId)
        );
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/my")
    public ResponseEntity<List<Application>> getMyApplications() {

        return ResponseEntity.ok(
                applicationService.getMyApplications()
        );
    }


    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/job/{jobId}")
    public ResponseEntity<List<Application>> getApplicants(
            @PathVariable Long jobId) {

        return ResponseEntity.ok(
                applicationService.getApplicants(jobId)
        );
    }
}
