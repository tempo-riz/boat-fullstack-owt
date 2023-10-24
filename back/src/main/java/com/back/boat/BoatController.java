package com.back.boat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin 
@RestController
@RequestMapping("/boats")
public class BoatController {
    @Autowired
    private BoatRepository boatRepository;

    @GetMapping
    public ResponseEntity<List<Boat>> getAllBoats() {
        List<Boat> boats = boatRepository.findAll();
        return new ResponseEntity<>(boats, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Boat> getBoatById(@PathVariable Long id) {
        Optional<Boat> boat = boatRepository.findById(id);

        if (boat.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(boat.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Boat> createBoat(@RequestBody Boat boat) {
        if (boat == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Boat createdBoat = boatRepository.save(boat);
        return new ResponseEntity<>(createdBoat, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boat> updateBoat(@PathVariable Long id, @RequestBody Boat boat) {
        if (!boatRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        boat.setId(id);
        Boat updatedBoat = boatRepository.save(boat);
        return new ResponseEntity<>(updatedBoat, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoat(@PathVariable Long id) {
        if (!boatRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        boatRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
