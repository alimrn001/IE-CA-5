package com.baloot.baloot.domain.Baloot.Exceptions;

public class NoLoggedInUserException extends Exception {
    public NoLoggedInUserException() {
        super("You have to login first to execute this task!");
    }
}
