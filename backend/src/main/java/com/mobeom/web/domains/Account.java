package com.mobeom.web.domains;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity(name="account")
@Component
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20) private String userId;
    @Column(length = 20) private String userName;
    @Column(length = 20) private String password;
    @Column(length = 20) private Date birthDate;
    @Column(length = 10) private Integer gender;
    @Column(length = 200) private String mainAddress;
    @Column(length = 200) private String secondAddress;
    @Column(length = 20) private Date joinDate;
    @Column(length = 20) private Date withdrawDate;
    @Column(length = 10) private Boolean adminKey;
    @Column(length = 20) private String cardNumber;


}
