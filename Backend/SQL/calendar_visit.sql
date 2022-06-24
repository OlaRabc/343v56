-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: calendar
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `visit`
--

DROP TABLE IF EXISTS `visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visit` (
  `visit_id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int DEFAULT NULL,
  `visit_status_id` int DEFAULT NULL,
  `visit_date` date DEFAULT NULL,
  `visit_start` time DEFAULT NULL,
  `visit_end` time DEFAULT NULL,
  `specialization_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  PRIMARY KEY (`visit_id`),
  KEY `patientId` (`patient_id`),
  KEY `visitStatus` (`visit_status_id`),
  KEY `specializationId` (`specialization_id`),
  KEY `doctor_id_idx` (`doctor_id`),
  CONSTRAINT `doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  CONSTRAINT `patientId` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  CONSTRAINT `specializationId` FOREIGN KEY (`specialization_id`) REFERENCES `specialization` (`specialization_id`),
  CONSTRAINT `visitStatus` FOREIGN KEY (`visit_status_id`) REFERENCES `visitstatus` (`visit_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visit`
--

LOCK TABLES `visit` WRITE;
/*!40000 ALTER TABLE `visit` DISABLE KEYS */;
INSERT INTO `visit` VALUES (1,NULL,1,NULL,NULL,NULL,NULL,NULL),(2,1,2,'2022-07-22','09:40:00','10:10:00',1,1),(3,3,3,'2022-07-22','10:20:00','10:50:00',1,1),(4,2,3,'2022-07-22','11:00:00','11:30:00',1,1),(5,4,3,'2022-07-22','11:40:00','12:10:00',1,1),(6,NULL,1,'2022-07-22','12:20:00','12:50:00',1,1),(7,NULL,1,'2022-07-21','09:40:00','10:10:00',1,1),(8,NULL,1,'2022-07-21','10:20:00','10:50:00',1,1),(9,NULL,1,'2022-07-21','11:00:00','11:30:00',1,1),(10,NULL,1,'2022-07-21','11:40:00','12:10:00',1,1),(11,NULL,1,'2022-07-21','12:20:00','12:50:00',1,1),(12,NULL,1,'2022-07-20','09:40:00','10:10:00',1,1),(13,NULL,1,'2022-07-20','10:20:00','10:50:00',1,1),(14,NULL,1,'2022-07-20','11:00:00','11:30:00',1,1),(15,NULL,1,'2022-07-20','11:40:00','12:10:00',1,1),(16,NULL,1,'2022-07-20','12:20:00','12:50:00',1,1),(17,2,2,'2022-07-19','09:40:00','10:10:00',1,1),(18,3,2,'2022-07-19','10:20:00','10:50:00',1,1),(19,NULL,1,'2022-07-19','11:00:00','11:30:00',1,1),(20,NULL,1,'2022-07-19','11:40:00','12:10:00',1,1),(21,NULL,1,'2022-07-19','12:20:00','12:50:00',1,1),(22,4,3,'2022-07-18','09:40:00','10:10:00',1,1),(23,2,3,'2022-07-18','10:20:00','10:50:00',1,1),(24,NULL,1,'2022-07-18','11:00:00','11:30:00',1,1),(25,NULL,1,'2022-07-18','11:40:00','12:10:00',1,1),(26,NULL,1,'2022-07-18','12:20:00','12:50:00',1,1),(27,1,2,'2022-08-22','09:40:00','10:10:00',1,2),(28,3,3,'2022-08-22','10:20:00','10:50:00',1,2),(29,2,3,'2022-08-22','11:00:00','11:30:00',1,2),(30,4,3,'2022-08-22','11:40:00','12:10:00',1,2),(31,NULL,1,'2022-08-22','12:20:00','12:50:00',1,2),(32,NULL,1,'2022-08-21','09:40:00','10:10:00',1,2),(33,NULL,1,'2022-08-21','10:20:00','10:50:00',1,2),(34,NULL,1,'2022-08-21','11:00:00','11:30:00',1,2),(35,NULL,1,'2022-08-21','11:40:00','12:10:00',1,2),(36,NULL,1,'2022-08-21','12:20:00','12:50:00',1,2),(37,NULL,1,'2022-08-20','09:40:00','10:10:00',1,2),(38,NULL,1,'2022-08-20','10:20:00','10:50:00',1,2),(39,NULL,1,'2022-08-20','11:00:00','11:30:00',1,2),(40,NULL,1,'2022-08-20','11:40:00','12:10:00',1,2),(41,NULL,1,'0022-08-20','12:20:00','12:50:00',1,2),(42,2,2,'2022-08-19','09:40:00','10:10:00',1,2),(43,3,2,'2022-08-19','10:20:00','10:50:00',1,2),(44,NULL,1,'2022-08-19','11:00:00','11:30:00',1,2),(45,NULL,1,'2022-08-19','11:40:00','12:10:00',1,2),(46,NULL,1,'2022-08-19','12:20:00','12:50:00',1,2),(47,4,3,'2022-08-18','09:40:00','10:10:00',1,2),(48,2,3,'2022-08-18','10:20:00','10:50:00',1,2),(49,NULL,1,'2022-08-18','11:00:00','11:30:00',1,2),(50,NULL,1,'2022-08-18','11:40:00','12:10:00',1,2),(51,NULL,1,'2022-08-18','12:20:00','12:50:00',1,2),(52,NULL,1,'2022-05-01','12:00:00','12:30:00',1,2),(53,NULL,2,'2022-05-01','12:40:00','13:10:00',1,2),(54,NULL,3,'2022-05-01','13:20:00','13:50:00',1,2),(80,NULL,3,'2024-05-01','13:20:00','13:50:00',1,2),(81,NULL,3,'2020-05-01','13:20:00','13:50:00',1,1),(82,NULL,3,'2020-05-01','14:20:00','14:50:00',1,1),(83,NULL,3,'2040-05-01','15:20:00','15:50:00',1,1),(84,NULL,1,'2020-05-01','13:20:00','13:50:00',1,1),(85,NULL,1,'2020-05-01','14:20:00','14:50:00',1,1),(86,NULL,1,'2040-05-01','15:20:00','15:50:00',1,1),(87,NULL,1,'2020-06-30','13:20:00','13:50:00',1,2),(88,NULL,1,'2020-07-05','13:20:00','13:50:00',1,2),(89,NULL,1,'2022-06-30','13:20:00','13:50:00',1,2),(90,NULL,1,'2022-07-05','13:20:00','13:50:00',1,2),(112,NULL,1,'2050-05-05','10:00:00','10:00:00',1,5),(115,NULL,2,NULL,NULL,NULL,NULL,NULL),(116,NULL,1,NULL,NULL,NULL,NULL,10);
/*!40000 ALTER TABLE `visit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-24 15:22:36
