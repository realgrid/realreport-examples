package com.example.realreport.web;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.realreport.domain.EstimateDetail;
import com.example.realreport.domain.EstimateMaster;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping("/")
public class IndexController {
    
    private static final String CUSTOMER = "(주)파워엑셀연구소";
    private static final String COMPANY = "(주)기업연구원";
    private static final String PRESIDENT = "이응혈";
    private static final String DEVELOPMENT_CORPORATION = "엑셀개발공사";

    @GetMapping
    public String home(Model model) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        ArrayList<EstimateMaster> estimateMasters = new ArrayList<>();
        ArrayList<EstimateDetail> estimateDetails = new ArrayList<>();

        estimateMasters.add(new EstimateMaster(CUSTOMER, COMPANY, PRESIDENT, DEVELOPMENT_CORPORATION, "서울시 성동구 성수동 373-15 테크원 1201호", "02-468-1234", "02-468-1235", 13000));
        
        estimateDetails.add(new EstimateDetail(CUSTOMER, COMPANY, PRESIDENT, "파워엑셀", "GX*10", "EA", 3, 50000, 150000, ""));
        estimateDetails.add(new EstimateDetail(CUSTOMER, COMPANY, PRESIDENT, "오픈산전", "TX3", "권", 5, 25000, 125000, ""));
        estimateDetails.add(new EstimateDetail(CUSTOMER, COMPANY, PRESIDENT, "클립아트", "LK23", "EA", 7, 34000, 238000, ""));
        
        model.addAttribute("title", "Real Report Example");
        model.addAttribute("estimateMasters", objectMapper.writeValueAsString(estimateMasters));
        model.addAttribute("estimateDetails", objectMapper.writeValueAsString(estimateDetails));
        
        return "index";
    }
}