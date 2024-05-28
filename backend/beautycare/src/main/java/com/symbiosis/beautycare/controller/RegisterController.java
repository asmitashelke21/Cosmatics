package com.symbiosis.beautycare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.symbiosis.beautycare.model.Register;
import com.symbiosis.beautycare.repository.RegisterRepository;

@RestController
@RequestMapping("/beautycare/")
public class RegisterController {
  @Autowired
  @Qualifier("regRepo")
  RegisterRepository regRepo;
  @GetMapping("/register")
  public String register()
  {
	  return "Register Page";
  }
  @PostMapping("/register")
  public Register handlepost(@RequestBody Register r)
  {
	   return regRepo.save(r);
  } 
  }

