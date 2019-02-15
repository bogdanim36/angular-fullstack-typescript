USE `pm`;
DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
	`description` TEXT NOT NULL,
	`closed` TINYINT NOT NULL,
	`parentId` INT(11),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;