package com.baloot.baloot.services.authentication;

import com.baloot.baloot.domain.Baloot.Baloot;

public class LogoutService {
    public static String informLogout() throws Exception {
        Baloot.getInstance().handleLogout();
        return "user is logged in ? : " + Baloot.getInstance().userIsLoggedIn();
    }
}
