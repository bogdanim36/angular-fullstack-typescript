USE `pm`;
DROP TABLE IF EXISTS `daily-report`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily-report`
(
    `id`           INT(11) NOT NULL AUTO_INCREMENT,
    `userId`       INT(11) NOT NULL,
    `date`         DATE    NOT NULL,
    `departmentId` DATE    NOT NULL,
    `teamId`       DATE    NOT NULL,
    `projectId`    DATE    NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 16
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;