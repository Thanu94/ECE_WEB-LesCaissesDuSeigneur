package io.tutorial.spring.garageApp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.tutorial.spring.garageApp.model.*;
import io.tutorial.spring.garageApp.Service.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.awt.*;
import java.util.List;

@RestController
public class controller {
    @Autowired
    private Service Service;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/cars")
    public List<Car> getCard(){
        return Service.getCars();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/car/{id}")
    public Car getCar(@PathVariable long id) {
        return Service.getCar(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.DELETE, value ="/car/{id}")
    public void deletCar(@PathVariable long id){
        Service.deleteCar(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.POST, value ="/cars")
    public void addCar(@RequestBody Car car){
        Service.addCar(car);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.PUT,value="/car/{id}")
    public void updateCar(@RequestBody Car car,@PathVariable long id){
        Service.updateCar(car,id);
    }
}
