package com.benjamin.paris_gateaux.io;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FoodResponse {
    String id;
    String name;
    String imageUrl;
    String description;
    Double price;
    String category;
}
