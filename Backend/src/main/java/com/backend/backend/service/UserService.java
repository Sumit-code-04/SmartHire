package com.backend.backend.service;

import com.backend.backend.entity.User;

import java.util.List;

public interface UserService {
    User registerUser(User user);
    List<User> getAllUsers();
    User loginUser(User user);
}
