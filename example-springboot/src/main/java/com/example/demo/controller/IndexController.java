package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public String index(){
        return "/index.html";
    }

    @GetMapping("/report/{id}")
    public String getReportId(@PathVariable String id){
        return "/forms/report-" + id + ".json";
    }
}
