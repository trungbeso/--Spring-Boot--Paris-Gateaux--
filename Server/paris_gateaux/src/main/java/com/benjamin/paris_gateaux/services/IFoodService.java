package com.benjamin.paris_gateaux.services;

import com.benjamin.paris_gateaux.io.FoodRequest;
import com.benjamin.paris_gateaux.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IFoodService {
    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

    List<FoodResponse> readAllFoods();

    FoodResponse readFood(String id);

    boolean deleteFile(String fileName);

    void deleteFood(String id);
}
