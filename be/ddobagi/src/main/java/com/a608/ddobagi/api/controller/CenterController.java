package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.service.CenterService;
import com.a608.ddobagi.api.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/centers")
@RestController
public class CenterController {

    @Autowired
    private CenterService centerService;

    @GetMapping("/sido")
    public ResponseEntity<?> getSidoList() {
        // 시도 조회
        return ResponseEntity.ok(centerService.findSido());
    }

//    @GetMapping("/gugun")
//    public ResponseEntity<?> getGugunList(@RequestParam("sido") String sido) {
//        return ResponseEntity.ok(centerService.findGugun());
//    }
}
