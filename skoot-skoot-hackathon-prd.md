# Product Requirements Document: Skoot Skoot (Hackathon Version)

## 1. Introduction

### 1.1 Product Overview
Skoot Skoot is a mobile application that enables users to rent e-scooters using Solana blockchain for secure and efficient payments. This version is specifically designed for a 6-week hackathon project.

### 1.2 Purpose
To create a functional prototype demonstrating the core e-scooter rental process using blockchain technology.

### 1.3 Scope
This PRD covers the essential features required for the main user flow: locating a scooter, initiating a ride via QR code scan, authorizing payment, and using the scooter.

## 2. Core Features

### 2.1 Scooter Locator
- Simple map interface showing available e-scooters
- Display of scooter locations (can use mock data for hackathon)

### 2.2 QR Code Scanning
- Ability to scan QR codes on e-scooters using the device camera
- QR code scanning initiates the rental process

### 2.3 Blockchain Payment Authorization
- Integration with Solana wallet for payment processing
- User confirms transaction to unlock the scooter

### 2.4 Ride Initiation
- Scooter unlocks after successful payment authorization
- Basic ride tracking (start time)

### 2.5 Ride Termination
- Simple method to end the ride (e.g., button in app or scan QR again)
- Basic cost calculation based on ride duration

## 3. Technical Requirements

### 3.1 Mobile Application
- Develop for one platform (iOS or Android, whichever is more familiar)
- Implement QR code scanning functionality
- Basic map integration for scooter locations

### 3.2 Backend Services
- Simple server to handle ride requests and status updates
- Integration with Solana blockchain for payment processing
- Basic data storage for ride information

### 3.3 Blockchain Integration
- Implement Solana program for ride initiation and payment
- Basic wallet connection and transaction signing

### 3.4 E-Scooter Simulation
- For hackathon purposes, simulate e-scooter locking/unlocking mechanism

## 4. User Flow

1. User opens app and views map of available scooters
2. User selects a scooter and scans its QR code
3. App prompts user to confirm rental payment via Solana wallet
4. Upon confirmation, app simulates scooter unlock and ride begins
5. User ends ride through the app
6. App displays basic ride summary and processes payment

## 5. Non-Functional Requirements

### 5.1 Performance
- App should respond to user actions within 3 seconds

### 5.2 Security
- Basic encryption for communication between app and backend
- Secure integration with Solana wallet

## 6. Out of Scope for Hackathon

- User registration and authentication
- Detailed ride history and receipts
- Advanced map features (filtering, real-time updates)
- Actual e-scooter hardware integration
- Comprehensive error handling and edge cases

## 7. Success Criteria for Hackathon

- Functional demo of the main user flow
- Successful integration with Solana blockchain for payments
- Basic UI/UX that showcases the concept effectively

## 8. Timeline (6 Weeks)

Week 1: Project setup and planning
Week 2-3: Core app development and basic blockchain integration
Week 4: Backend development and API setup
Week 5: Integration and testing
Week 6: Refinement and preparation for demo

## 9. Key Challenges

1. Simplifying blockchain integration for rapid development
2. Creating a compelling demo with simulated hardware
3. Balancing feature development with the short timeline

This streamlined PRD focuses on the essential features required to demonstrate the core concept of Skoot Skoot within the constraints of a 6-week hackathon. It prioritizes the main user flow and blockchain integration while simplifying or omitting features that aren't critical for the proof of concept.
