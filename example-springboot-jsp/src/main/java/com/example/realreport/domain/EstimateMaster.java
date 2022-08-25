package com.example.realreport.domain;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonNaming(PropertyNamingStrategies.UpperCamelCaseStrategy.class)
public class EstimateMaster {
    private String customer;
    private String company;
    private String president;
    private String developmentCorporation;
    private String address;
    private String tel;
    private String fax;
    private int sumAmount;

    public EstimateMaster(String customer, String company, String president, String developmentCorporation,
            String address, String tel, String fax, int sumAmount) {
        this.customer = customer;
        this.company = company;
        this.president = president;
        this.developmentCorporation = developmentCorporation;
        this.address = address;
        this.tel = tel;
        this.fax = fax;
        this.sumAmount = sumAmount;
    }
    public String getCustomer() {
        return customer;
    }
    public void setCustomer(String customer) {
        this.customer = customer;
    }
    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }
    public String getPresident() {
        return president;
    }
    public void setPresident(String president) {
        this.president = president;
    }
    public String getDevelopmentCorporation() {
        return developmentCorporation;
    }
    public void setDevelopmentCorporation(String developmentCorporation) {
        this.developmentCorporation = developmentCorporation;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    public String getFax() {
        return fax;
    }
    public void setFax(String fax) {
        this.fax = fax;
    }
    public int getSumAmount() {
        return sumAmount;
    }
    public void setSumAmount(int sumAmount) {
        this.sumAmount = sumAmount;
    }
}
