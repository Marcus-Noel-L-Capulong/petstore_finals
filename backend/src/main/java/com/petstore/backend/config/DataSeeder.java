package com.petstore.backend.config;

import com.petstore.backend.model.Category;
import com.petstore.backend.model.Pet;
import com.petstore.backend.repository.CategoryRepository;
import com.petstore.backend.repository.PetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(CategoryRepository categoryRepository, PetRepository petRepository) {
        return args -> {
            if (categoryRepository.count() == 0) {
                Category dogs = new Category(null, "Dogs", "Man's best friend", "https://images.unsplash.com/photo-1543466835-00a7907e9de1");
                Category cats = new Category(null, "Cats", "Independent and loving", "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba");
                Category birds = new Category(null, "Birds", "Feathered companions", "https://images.unsplash.com/photo-1552728089-571ebd13eb3b");
                Category reptiles = new Category(null, "Reptiles", "Scaly friends", "https://images.unsplash.com/photo-1517451330947-7809dead78d5");
                Category fishes = new Category(null, "Fishes", "Aquatic pets", "https://images.unsplash.com/photo-1524704654690-b56c05c78a00");

                categoryRepository.saveAll(List.of(dogs, cats, birds, reptiles, fishes));

                if (petRepository.count() == 0) {
                    petRepository.save(new Pet(null, "Buddy", "Golden Retriever", 24, new BigDecimal("1200.00"), "Friendly and energetic.", "https://images.unsplash.com/photo-1552053831-71594a27632d", dogs));
                    petRepository.save(new Pet(null, "Bella", "Pug", 12, new BigDecimal("800.00"), "Playful and affectionate.", "https://images.unsplash.com/photo-1517849845537-4d257902454a", dogs));
                    
                    petRepository.save(new Pet(null, "Luna", "Siamese", 6, new BigDecimal("600.00"), "Vocal and social.", "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8", cats));
                    petRepository.save(new Pet(null, "Milo", "Maine Coon", 36, new BigDecimal("1000.00"), "Large, fluffy, and gentle.", "https://images.unsplash.com/photo-1533738363-b7f9aef128ce", cats));

                    petRepository.save(new Pet(null, "Charlie", "Parrot", 48, new BigDecimal("450.00"), "Talkative and colorful.", "https://images.unsplash.com/photo-1522858547144-b032d8c46fc5", birds));
                    
                    petRepository.save(new Pet(null, "Spike", "Bearded Dragon", 18, new BigDecimal("250.00"), "Docile and easy to handle.", "https://images.unsplash.com/photo-1504450758481-7338eba7524a", reptiles));

                    petRepository.save(new Pet(null, "Nemo", "Clownfish", 5, new BigDecimal("45.00"), "Vibrant orange and white.", "https://images.unsplash.com/photo-1535591273668-578e31182c4f", fishes));
                }
            }
        };
    }
}
