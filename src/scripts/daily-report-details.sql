USE `pm`;
DROP TABLE IF EXISTS `daily-report-details`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily-report-details`
(
    `id`            INT(11)     NOT NULL AUTO_INCREMENT,
    `dailyReportId` INT(11)     NOT NULL,
    `status`        VARCHAR(20) NOT NULL,
    `percent`       VARCHAR(20) NOT NULL,
    `taiga`         VARCHAR(15),
    `subsection`    VARCHAR(150),
    `description`    VARCHAR(400),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 16
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
