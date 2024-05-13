package io.tutorial.spring.garageApp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cars")
public class Car {
    public enum Color {
        RED,
        BLUE,
        GREEN,
        YELLOW
    }
    @Id
    private long id;
    private String model;
    private String brand;
    @Column(name = "released_year")
    private int year;
    private String imageURL;
    private String description;
    private int mileage ;
    private int price;
    public Color color;

    public Car(){

    }
    public Car(long id, String model, String brand, int year,String imageURL, String description, int mileage, int price, Color color) {
        super();
        this.model = model;
        this.id = id;
        this.brand = brand;
        this.year = year;
        this.imageURL = imageURL;
        this.description = description;
        this.mileage = mileage;
        this.price = price;
        this.color = color;
    }

    public String getImageURL() {
        return imageURL;
    }

    public int getMileage() {
        return mileage;
    }

    public int getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public long getID() {
        return id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setID(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Car{" +
                "ID=" + id +
                ", model='" + model + '\'' +
                ", brand='" + brand + '\'' +
                ", year=" + year +
                ", imageURL='" + imageURL + '\'' +
                ", description='" + description + '\'' +
                ", mileage=" + mileage +
                ", price=" + price +
                ", color=" + color +
                '}';
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

}
