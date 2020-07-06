package com.mobeom.web.controllers;

import com.mobeom.web.domains.Account;
import com.mobeom.web.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/accounts")
@RestController
public class AccountController {
    @Autowired
    AccountService accountService;

    @ResponseBody
    @RequestMapping(value ="/idCheck", method = RequestMethod.POST)
    public boolean idCheck(Account account) {
        boolean result = accountService.idCheck(account);
        return result;
    }

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public Map<?,?> join(@RequestBody Account account) {
        Map map = new HashMap<>();
        boolean result = accountService.idCheck(account);
        if(result) {
            map.put("result", false);
        } else {
            accountService.create(account);
            map.put("result", true);
        }
        return map;
    }
}
