package com.mobeom.web.services;

import com.mobeom.web.domains.Account;
import org.springframework.stereotype.Component;

@Component
public interface AccountService {

    public boolean idCheck(Account account);
    public void create(Account account);
}
