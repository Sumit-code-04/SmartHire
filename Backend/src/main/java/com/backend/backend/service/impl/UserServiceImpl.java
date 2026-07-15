package com.backend.backend.service.impl;

import com.backend.backend.entity.User;
import com.backend.backend.exception.InvalidCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.backend.backend.exception.EmailAlreadyExistsException;

import com.backend.backend.repository.UserRepository;
import com.backend.backend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {


    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;

    }

    @Override
    public User registerUser(User user) {
        Optional<User> existingUser =
                userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()){
            throw new EmailAlreadyExistsException("Email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);

    }
    @Override
    public List <User> getAllUsers() {
        return userRepository.findAll();

    }
    @Override
    public User loginUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isEmpty()) {
            return null;
        }

        if (!passwordEncoder.matches(
                user.getPassword(),
                existingUser.get().getPassword())) {

            throw new InvalidCredentialsException("Invalid email or password");
        }

        return existingUser.get();



    }






}
