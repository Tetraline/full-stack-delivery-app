package com.delivery.deliveryapp;

public class Seller {
    private int id;
    private double lat;
    private double lon;
    private String name;

    private SellerCategory category;

    public Seller(int id, double lat, double lon, String name, SellerCategory category) {
        this.id = id;
        this.lat = lat;
        this.lon = lon;
        this.name = name;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
