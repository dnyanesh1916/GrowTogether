package backend.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.demo.entity.Register;

public interface RegisterRepo extends JpaRepository<Register, Integer> {
    Register findByEmail(String email);
    boolean existsByEmail(String email);
}
