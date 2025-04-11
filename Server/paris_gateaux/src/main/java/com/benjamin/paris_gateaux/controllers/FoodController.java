package com.benjamin.paris_gateaux.controllers;

import com.benjamin.paris_gateaux.io.FoodRequest;
import com.benjamin.paris_gateaux.io.FoodResponse;
import com.benjamin.paris_gateaux.services.IFoodService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@CrossOrigin("*")
public class FoodController {

    IFoodService foodService;

    @PostMapping("/create")
    public FoodResponse addFood (@RequestPart("food") String foodString,
                                 @RequestPart("file") MultipartFile file) {
        ObjectMapper mapper = new ObjectMapper();
        FoodRequest request;
        try {
            request = mapper.readValue(foodString, FoodRequest.class);
        } catch (JsonProcessingException ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
        }
        return foodService.addFood(request,file);
    }

    @GetMapping
    public List<FoodResponse> readFoods (){
        return foodService.readAllFoods();
    }

    @GetMapping("/{id}")
    public FoodResponse readFood (@PathVariable String id) {
        return foodService.readFood(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFood (@PathVariable("id") String id) {
        foodService.deleteFood(id);
    }
}
