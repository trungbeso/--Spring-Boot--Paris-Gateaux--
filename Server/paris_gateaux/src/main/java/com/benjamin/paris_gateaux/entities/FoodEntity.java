package com.benjamin.paris_gateaux.entities;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Document(collection = "foods")
public class FoodEntity {
    @Id
    String id;
    String name;
    String description;
    Double price;
    String category;
    String imageUrl;
}
