package com.benjamin.paris_gateaux.io;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FoodRequest {
    String name;

    String description;

    Double price;

    String category;
}
