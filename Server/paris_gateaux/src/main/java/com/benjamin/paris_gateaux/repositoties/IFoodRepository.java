package com.benjamin.paris_gateaux.repositoties;

import com.benjamin.paris_gateaux.entities.FoodEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFoodRepository extends MongoRepository<FoodEntity, String> {

}
