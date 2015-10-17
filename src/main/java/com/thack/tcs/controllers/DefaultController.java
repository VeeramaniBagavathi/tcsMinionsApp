/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.thack.tcs.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author john
 */
@Controller
public class DefaultController {

    @RequestMapping(value = {"/", "index1.html"})
    public String goToIndex() {
        return "index";
    }

    @RequestMapping("/index2.html")
    public String goToIndex2() {
        return "index2";
    }

    @RequestMapping("/index3.html")
    public String goToIndex3() {
        return "index3";
    }

    @RequestMapping("/index4.html")
    public String goToIndex4() {
        return "index4";
    }
}
