# Rentx - Car Rent Management

## Car Registration

**FR** => Functional Requirements
It should be possible to register a new car
It should be possible to list all car categories

**NFR** => Non-Functional Requirements

**BR** => Business Rule
It should not be possible to register a car with an already existent license plate.
It should not be possible to update a license plate which was registered for a car.
Car should be registered, by default, with available dates.
User responsible by car registry, should be an administrator.

## Car Listing

**FR** => Functional Requirements
It should be possible to list all available cars
It should be possible to list all available cars by the category name
It should be possible to list all available cars by the brand name
It should be possible to list all available cars by the car name

**NFR** => Non-Functional Requirements
It should be possible to any not authenticated user to list available cars 

**BR** => Business Rule

## Car Specification Registration

**FR** => Functional Requirements
It should be possible to register a car specification
It should be possible to list car specifications
It should be possible to list all cars

**NFR** => Non-Functional Requirements

**BR** => Business Rule
It should not be possible to register a specification for a non-registered car
It should not be possible to register an already existent specification for the same car

## Car Images Registration

**FR** => Functional Requirements
It should be possible to register an image for a car

**NFR** => Non-Functional Requirements
Use multer lib for files upload

**BR** => Business Rule
User should be able to register more than one image for the same car
User should be an administrator to be able to register an image

## Car Rent

**FR** => Functional Requirements
It should be possible to register a car rental intent

**NFR** => Non-Functional Requirements


**BR** => Business Rule
Car rental agreement should last at least 24 hours
It should not be possible to register a new rental intent, if there already is another intent for the same user
It should not be possible to register a new rental intent, if there already is another intent for the same car
