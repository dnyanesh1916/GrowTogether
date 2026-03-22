package backend.demo.entity;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class RegisterDto {

    @NotBlank(message = "Name is required")
    @Size(min = 3, message = "Name must be at least 3 chars")
    private String name;

    @NotBlank
    @Email(message = "Invalid email format")
    @Column(unique = true)
    private String email;

    @NotBlank
    @Size(min = 8)
    @Pattern(
      regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#]).*$",
      message = "Weak password"
    )
    private String password;
    @NotBlank
    @Size(min = 8)
    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#]).*$",
            message = "Weak password"
    )
    private String confirmPassword;

////    @NotNull
    private LocalDate dob;
////    @NotNull
    private String qualification;
//    @NotNull
    private String gender;
}