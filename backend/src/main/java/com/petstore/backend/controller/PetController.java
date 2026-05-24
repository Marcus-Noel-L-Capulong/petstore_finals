package com.petstore.backend.controller;

import com.petstore.backend.model.Pet;
import com.petstore.backend.repository.PetRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    private final PetRepository petRepository;

    public PetController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @GetMapping
    public List<Pet> getAllPets(@RequestParam(required = false) Long categoryId) {
        if (categoryId != null) {
            return petRepository.findByCategoryId(categoryId);
        }
        return petRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable Long id) {
        return petRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
