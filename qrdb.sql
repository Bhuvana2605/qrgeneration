-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: qrdb
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `emp`
--

DROP TABLE IF EXISTS `emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp` (
  `age` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp`
--

LOCK TABLES `emp` WRITE;
/*!40000 ALTER TABLE `emp` DISABLE KEYS */;
/*!40000 ALTER TABLE `emp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `organisation` varchar(255) DEFAULT NULL,
  `valid_from` date DEFAULT NULL,
  `valid_to` date DEFAULT NULL,
  `gate` varchar(255) DEFAULT NULL,
  `shift` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Aarav Mehta','Security Guard','SecureCorp','2025-06-01','2025-12-01','A1','Morning'),(2,'Nisha Patel','Receptionist','SecureCorp','2025-06-01','2025-12-01','B2','Evening'),(3,'Ravi Verma','IT Support','TechShield','2025-06-01','2025-09-01','C1','Night'),(4,'Priya Nair','Manager','AdminPros','2025-06-01','2025-08-31','A2','Morning'),(5,'Karan Kapoor','Janitor','CleanZone','2025-06-01','2025-11-30','B1','Evening'),(6,'Sunita Rao','Electrician','FixIt Ltd.','2025-06-01','2025-10-15','C2','Night'),(7,'Anil Sharma','Security Guard','SecureCorp','2025-06-01','2025-12-01','A1','Night'),(8,'Meena Joshi','Admin Assistant','AdminPros','2025-06-01','2025-09-15','B2','Morning'),(9,'Rajiv Menon','Network Engineer','TechShield','2025-06-01','2025-12-01','C3','Morning'),(10,'Deepika Singh','HR Executive','SecureCorp','2025-06-01','2025-10-01','A2','Evening'),(11,'Mohit Jain','Maintenance','FixIt Ltd.','2025-06-01','2025-09-30','C1','Night'),(12,'Lakshmi Iyer','Cleaner','CleanZone','2025-06-01','2025-12-31','B1','Morning'),(13,'Yusuf Khan','Security Head','SecureCorp','2025-06-01','2025-12-01','A3','Evening'),(14,'Sneha Reddy','Front Desk','AdminPros','2025-06-01','2025-11-01','B2','Morning'),(15,'Ajay Deshmukh','Technician','TechShield','2025-06-01','2025-09-15','C2','Night');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-08 21:35:33
