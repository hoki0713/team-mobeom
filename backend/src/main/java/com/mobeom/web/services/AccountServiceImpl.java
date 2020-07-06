package com.mobeom.web.services;

import com.mobeom.web.Repositories.AccountRepository;
import com.mobeom.web.domains.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    AccountRepository accountRepository;

    @Override
    public boolean idCheck(Account account) {
        boolean result = false;
        if(accountRepository.findByUserId(account.getUserId()) != null) {
            result = true;
        }
        return result;
    }

    @Override
    public void create(Account account) {
        accountRepository.save(account);
    }
}
