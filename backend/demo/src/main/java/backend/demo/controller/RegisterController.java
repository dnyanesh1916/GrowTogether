package backend.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.demo.entity.Register;
import backend.demo.repo.RegisterRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterController {
    
    @Autowired
    RegisterRepo registerRepo;
    @PostMapping("/register")
    ResponseEntity<Register> registerUser(@RequestBody Register register) {
        // Logic to save the user details to the database
        // For now, we will just return the received register object
        try{
            return ResponseEntity.status(200).body(registerRepo.save(register));
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @PostMapping("/login")
    ResponseEntity<?> loginUser(@RequestBody Register register) {
        // Logic to save the user details to the database
        // For now, we will just return the received register object
        try{

            if(register.getEmail() == null || register.getPassword() == null) {
                return ResponseEntity.status(400).build();
            }
            if(registerRepo.findByEmail(register.getEmail()) != null){
                if(registerRepo.findByEmail(register.getEmail()).getPassword().equals(register.getPassword())){
                    return ResponseEntity.status(200).body(registerRepo.findByEmail(register.getEmail()));
                } else {
                    return ResponseEntity.status(401).body("Invalid credentials");
                }
            }
            else {
                return ResponseEntity.status(404).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}
