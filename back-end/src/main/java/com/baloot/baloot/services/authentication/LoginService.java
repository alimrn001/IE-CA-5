package com.baloot.baloot.services.authentication;

import com.baloot.baloot.domain.Baloot.Baloot;

public class LoginService {
    public static String informLogin() throws Exception {
        Baloot.getInstance().handleLogin("amir", "1234");
        return "You've entered login page, total users are : " + Baloot.getInstance().getBalootUsers().size() +
                "current logged in user is : " + Baloot.getInstance().getLoggedInUsername();
    }
}
