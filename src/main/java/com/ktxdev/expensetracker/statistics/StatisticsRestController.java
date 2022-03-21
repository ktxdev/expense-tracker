package com.ktxdev.expensetracker.statistics;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@Api( value = "Dashboard", tags = {"Dashboard"})
@RequestMapping("api/v1/dashboard")
public class StatisticsRestController {

    private final StatisticsService statisticsService;

    @GetMapping
    @ApiOperation("Get Dashboard statistics")
    private Statistics dashboard() {
        return statisticsService.getStatistics();
    }
}
